import clsx from "clsx";
import { useCollection } from "../../web3/CollectionProvider";
import { useState, useRef, type ReactNode } from "react";

export default function RoyaltiesButton() {
  const { contract, royalties } = useCollection();
  const modalRef = useRef<HTMLDialogElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [answerData, setAnswerData] = useState<{
    success: boolean;
    content: ReactNode;
  }>();
  const claim = async () => {
    if (!contract) return;
    setIsLoading(true);
    try {
      const claim = await contract.claimAllRoyalties();
      await claim.wait();
      setAnswerData({ success: true, content: "Royalties claimed!" });

      //   setClaimed((prevClaimed) => prevClaimed + 1);
    } catch (err) {
      console.log(err);
      if (err instanceof Error) {
        setAnswerData({
          success: false,
          content: err.message.includes("user rejected action")
            ? "User rejected transaction!"
            : "Please refresh the page or clear the cache!",
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
        <button
          className={clsx(
            "btn btn-primary btn-wide",
            royalties === 0 ? "btn-disabled" : ""
          )}
          disabled={royalties === 0}
          onClick={claim}
        >
          Claim
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
