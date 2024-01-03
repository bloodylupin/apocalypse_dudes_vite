import { AnimatePresence, motion } from "framer-motion";
import { useWeb3React } from "@web3-react/core";

import { pageVariants, elementVariants } from "../App";
import ConnectButton from "../components/ConnectButton";
import MintBox from "./Mint/MintBox";
// import useCountdown from "../hooks/useCountdown";
// import Countdown from "../components/Countdown";

export default function Mint() {
  const { account } = useWeb3React();
  // const { difference } = useCountdown();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={pageVariants}
      className="col-start-1 row-start-2 grid"
    >
      <div
        className="hero bg-top"
        style={{ backgroundImage: 'url("./img/bg-mint.jpg")' }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <motion.h1 variants={elementVariants} className="mb-5 text-4xl">
              Mint
            </motion.h1>
            <AnimatePresence>
              {account ? (
                <motion.div key={account} variants={elementVariants}>
                  <MintBox />
                </motion.div>
              ) : (
                <motion.div key={account} variants={elementVariants}>
                  <ConnectButton />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
