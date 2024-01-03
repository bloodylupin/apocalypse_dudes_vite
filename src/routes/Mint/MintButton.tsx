import { parseEther } from "ethers";
import { useCollection } from "../../web3/CollectionProvider";

import { useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

export default function MintButton({ amount }: { amount: number }) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [answerData, setAnswerData] = useState<{
    success: boolean;
    content: ReactNode;
  }>();

  const { contract, balance, price, setMinted } = useCollection();
  const mint = async () => {
    try {
      setIsLoading(true);
      if (!contract) return;
      if (parseInt(balance) < price * amount)
        throw new Error(`insufficient funds`);
      const totalPrice = parseEther((price * amount).toString());
      const mintTransaction = await contract.mint(amount, {
        value: totalPrice,
      });

      await mintTransaction.wait();

      setAnswerData({
        success: true,
        content: (
          <div className="grid grid-cols-2 gap-4">
            <p className="text-left my-auto">
              You minted {amount} NFT{amount > 1 ? "s" : ""}
            </p>
            <Link to="/collection" className="btn btn-outline btn-info ml-auto">
              View Collection
            </Link>
          </div>
        ),
      });
      setMinted((prevMinted) => prevMinted + 1);

      console.log("minted");
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        setAnswerData({
          success: false,
          content: (
            <div>
              {error.message.includes("insufficient")
                ? `Insufficient balance for mint: Price ${price * amount} CRO`
                : error.message.includes("user rejected")
                ? "User rejected the transaction"
                : "Please refresh the page or clear the cache!"}
            </div>
          ),
        });
      }
    }
    modalRef.current?.showModal();
    setIsLoading(false);
  };
  return (
    <>
      {isLoading ? (
        <button className="btn btn-primary btn-wide btn-disabled" disabled>
          <span className="loading loading-infinity loading-lg"></span>
        </button>
      ) : (
        <button className="btn btn-primary btn-wide" onClick={mint}>
          Mint
        </button>
      )}

      <dialog className="modal" ref={modalRef}>
        <form
          method="dialog"
          className={clsx(
            "modal-box",
            answerData?.success ? "bg-success-content" : "bg-error-content"
          )}
        >
          <h3 className="font-bold text-lg mb-6">
            {answerData?.success
              ? "Congratulatutions!"
              : "Something went wrong..."}
          </h3>
          {answerData?.content}
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
