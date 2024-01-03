import { useState, useRef } from "react";
import { useCollection } from "../../web3/CollectionProvider";

import { motion } from "framer-motion";

import MintButton from "./MintButton";

export default function MintBox() {
  const [amount, setAmount] = useState(1);
  const rangeRef = useRef<HTMLInputElement>(null);
  const { supply, price, isWhitelisted } = useCollection();
  const STEP = 25;
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.27,
      },
    },
  };
  const elementVariants = {
    hidden: {
      filter: "blur(50px)",
      rotate: -360,
    },
    visible: {
      filter: "blur(0px)",
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="grid grid-cols-2 md:grid-cols-3 gap-4"
    >
      <div className="stats shadow">
        <div className="stat overflow-hidden">
          <motion.div variants={elementVariants} className="stat-title">
            Supply
          </motion.div>
          <motion.div
            variants={elementVariants}
            className="stat-value text-secondary max-md:text-3xl"
          >
            {supply.minted} / {supply.total}
          </motion.div>
          {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
        </div>
      </div>
      <div className="stats shadow md:col-start-3 md:row-start-1">
        <div className="stat overflow-hidden">
          <motion.div variants={elementVariants} className="stat-title">
            Price
          </motion.div>
          <motion.div
            variants={elementVariants}
            className="stat-value text-secondary max-md:text-3xl"
          >
            <div className="indicator">
              {amount * price} CRO
              {isWhitelisted ? (
                <span className="indicator-item text-xs text-warning">WL</span>
              ) : null}
            </div>
          </motion.div>
          {/* <motion.div variants={elementVariants} className="stat-desc">
              ↘︎ 90 (14%)
            </motion.div> */}
        </div>
      </div>
      <div className="stats shadow max-md:col-span-2 md:col-start-2 md:row-start-1">
        <div className="stat overflow-hidden flex md:flex-col justify-center items-center">
          <div>
            <motion.div variants={elementVariants} className="stat-title">
              Amount
            </motion.div>
            <motion.div
              variants={elementVariants}
              className="stat-value text-secondary"
            >
              {amount}
            </motion.div>
          </div>
          <div className="w-full">
            <motion.input
              variants={elementVariants}
              type="range"
              min="0"
              max={STEP * 4}
              defaultValue="0"
              className="range range-info"
              // step={STEP}
              onChange={() =>
                rangeRef.current &&
                setAmount(
                  Math.floor(parseInt(rangeRef.current?.value) / STEP) + 1
                )
              }
              ref={rangeRef}
            />
            <div className="w-full flex justify-between text-xs px-2">
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        variants={elementVariants}
        className="max-md:col-span-2 md:col-start-2 justify-self-center"
      >
        <MintButton amount={amount} />
      </motion.div>
    </motion.div>
  );
}
