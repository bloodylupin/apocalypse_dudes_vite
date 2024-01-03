import RoyaltiesButton from "./RoyaltiesButton";

import { useCollection } from "../../web3/CollectionProvider";

import { motion } from "framer-motion";
export default function RoyaltiesBox() {
  const { uri, royalties } = useCollection();

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
      className="grid md:grid-cols-2 gap-4 mb-8"
    >
      <div className="stats shadow">
        <div className="stat overflow-hidden">
          <motion.div variants={elementVariants} className="stat-title">
            You own
          </motion.div>
          <motion.div
            variants={elementVariants}
            className="stat-value text-secondary"
          >
            {uri.length} NFT{uri.length !== 1 ? "s" : ""}
          </motion.div>
          {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
        </div>
      </div>
      <div className="stats shadow">
        <div className="stat overflow-hidden">
          <motion.div variants={elementVariants} className="stat-title">
            You have
          </motion.div>
          <motion.div
            variants={elementVariants}
            className="stat-value text-secondary"
          >
            {royalties} CRO
          </motion.div>
          <motion.div variants={elementVariants} className="stat-desc">
            to claim
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={elementVariants}
        className="md:col-span-2 justify-self-center"
      >
        <RoyaltiesButton />
      </motion.div>
    </motion.div>
  );
}
