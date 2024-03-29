import { Web3ReactHooks, Web3ReactProvider } from "@web3-react/core";

import type { MetaMask } from "@web3-react/metamask";

import { hooks as metaMaskHooks, metaMask } from "./metaMask";
import { type ReactNode } from "react";

const connectors: [MetaMask, Web3ReactHooks][] = [[metaMask, metaMaskHooks]];

export default function Web3Provider({ children }: { children: ReactNode }) {
  return (
    <Web3ReactProvider connectors={connectors}>{children}</Web3ReactProvider>
  );
}
