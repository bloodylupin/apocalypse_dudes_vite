import { ethers, Contract, BigNumberish } from "ethers";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./solidityData";
import { useWeb3React } from "@web3-react/core";

import { BrowserProvider } from "ethers";
import { Eip1193Provider } from "ethers";
import { formatEther } from "ethers";

// import { hooks } from "./metaMask";

type CollectionContextType = {
  balance: string;
  contract: Contract | undefined;
  supply: {
    minted: number;
    total: number;
  };
  price: number;
  isWhitelisted: boolean;
  uri: string[];
  setMinted: Dispatch<SetStateAction<number>>;
  royalties: number;
  setClaimed: Dispatch<SetStateAction<number>>;
};
const CollectionContext = createContext({} as CollectionContextType);

export function CollectionProvider({ children }: { children: ReactNode }) {
  const [minted, setMinted] = useState(0);

  const { account, provider } = useWeb3React();
  //   console.log(hooks.useProvider());
  const [balance, setBalance] = useState("");
  useEffect(() => {
    (async () => {
      try {
        if (!account || !provider) return;
        setBalance(
          ethers.formatEther((await provider.getBalance(account)).toString())
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, [account, provider, minted]);

  const [contract, setContract] = useState<Contract>();
  useEffect(() => {
    (async () => {
      try {
        if (!account || !provider) return;
        // HOW TO FIX THIS?
        // const ethersProvider = new BrowserProvider(
        //   window.ethereum! //as Eip1193Provider
        // );
        // const signer = provider?.getSigner();
        const ethersProvider = new BrowserProvider(
          provider.provider as Eip1193Provider
        );
        const signer = await ethersProvider.getSigner();
        setContract(new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [account, provider]);

  const [supply, setSupply] = useState({ minted: 0, total: 0 });
  useEffect(() => {
    (async () => {
      try {
        if (!account || !contract) return;
        setSupply({
          minted: (await contract.totalSupply()).toString(),
          total: (await contract.MAX_SUPPLY()).toString(),
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [account, contract, minted]);

  const [isWhitelisted, setIsWhitelisted] = useState(false);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    (async () => {
      try {
        if (!account || !contract) return;
        const isWl: boolean = await contract.isWhitelisted(account);
        setIsWhitelisted(isWl);
        const rawPrice = isWl
          ? await contract.WHITELIST_MINT_PRICE()
          : await contract.MINT_PRICE();
        setPrice(parseInt(formatEther(rawPrice)));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [account, contract]);
  //   console.log(supply);

  const [uri, setUri] = useState<string[]>([]);
  useEffect(() => {
    if (!contract || !account) return;
    (async () => {
      const idArray: string[] = (await contract.tokensOfWallet(account)).map(
        (id: BigNumberish) => id.toString()
      );
      if (!idArray.length) return;
      const tempUri = await contract.tokenURI(idArray![0]);
      console.log(tempUri);
      const uriArray = idArray.map(
        // (id: string) => `https://ipfs.io/ipfs/${tempUri.split("/")[2]}/${id}`
        (id: string) =>
          `https://${tempUri.split("/")[2]}.ipfs.nftstorage.link/${id}`
      );

      setUri(uriArray.reverse());
    })();
    return () => setUri([]);
  }, [contract, account, minted]);

  const [royalties, setRoyalties] = useState(0);
  const [claimed, setClaimed] = useState(0);
  useEffect(() => {
    if (!account) return;
    if (!contract) return;
    (async () => {
      try {
        const royalty =
          Math.floor(
            parseFloat(formatEther(await contract.getRoyalties())) * 100
          ) / 100;
        setRoyalties(royalty);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [account, contract, claimed, minted]);

  return (
    <CollectionContext.Provider
      value={{
        balance,
        contract,
        supply,
        price,
        isWhitelisted,
        uri,
        setMinted,
        royalties,
        setClaimed,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
}

export function useCollection() {
  return useContext(CollectionContext);
}
