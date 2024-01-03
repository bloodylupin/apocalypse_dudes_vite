import { metaMask } from "../web3/metaMask";
import { useWeb3React } from "@web3-react/core";

import { type ReactNode, useState, useRef } from "react";
import { formatAccount, formatBalance } from "../utils/stringUtils";
import { useCollection } from "../web3/CollectionProvider";

// import useCountdown from "../hooks/useCountdown";

const CHAIN_INFO = {
  chainId: 25,
  chainName: "Cronos Mainnet",
  nativeCurrency: {
    name: "cronos",
    symbol: "CRO",
    decimals: 18 as const,
  },
  rpcUrls: ["https://cronos-evm.publicnode.com"],
};
// {
//   chainId: 338,
//   chainName: "Cronos Test Net",
//   nativeCurrency: {
//     name: "cronos",
//     symbol: "tCRO",
//     decimals: 18 as const,
//   },
//   rpcUrls: ["https://evm-t3.cronos.org"],
// };

export default function ConnectButton() {
  // const { difference } = useCountdown();

  const [isLoading, setIsLoading] = useState(false);
  const { account } = useWeb3React();
  const { balance } = useCollection();
  const [answerData, setAnswerData] = useState<{
    success: boolean;
    content: ReactNode;
  }>();
  const modalRef = useRef<HTMLDialogElement>(null);

  async function connectMetaMask() {
    try {
      setIsLoading(true);
      if (window.ethereum) {
        const hasCompletedConnection = metaMask.activate(CHAIN_INFO);
        await hasCompletedConnection;
      } else
        throw new Error(
          "Please install Metamask extension or use Metamask Mobile Web Browser"
        );
    } catch (error) {
      console.log(error);
      if (error instanceof Error)
        setAnswerData({ success: false, content: error.message });
      modalRef.current?.showModal();
    }
    setIsLoading(false);
  }
  function disconnectMetaMask() {
    try {
      metaMask.resetState();
    } catch (error) {
      console.log(error);
    }
  }
  return isLoading ? (
    <button className="btn btn-primary btn-disabled" disabled>
      <span className="loading loading-infinity loading-lg"></span> Loading...
    </button>
  ) : account ? (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-outline avatar">
        {formatAccount(account)}
      </label>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-fit"
      >
        <li>{formatAccount(account)}</li>
        <li>{formatBalance(balance)} CRO</li>
        <button className="btn btn-outline mt-4" onClick={disconnectMetaMask}>
          Log-out
        </button>
      </ul>
    </div>
  ) : (
    <>
      <button className="btn btn-primary" onClick={connectMetaMask}>
        connect wallet
      </button>
      <dialog className="modal" ref={modalRef}>
        <form method="dialog" className="modal-box bg-error-content">
          <h3 className="font-bold text-lg mb-6">Something went wrong...</h3>
          {answerData?.content}
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
