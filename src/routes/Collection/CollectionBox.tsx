import { useCollection } from "../../web3/CollectionProvider";
import CollectionButton from "./CollectionButton";
import { motion } from "framer-motion";

export default function CollectionBox() {
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
  const { uri } = useCollection();

  let role = "";

  switch (true) {
    case uri.length === 0:
      role = "guest";
      break;
    case uri.length > 0 && uri.length < 5:
      role = "hodler";
      break;
    case uri.length > 4 && uri.length < 10:
      role = "mate";
      break;
    case uri.length > 9 && uri.length < 25:
      role = "shark";
      break;
    case uri.length > 24:
      role = "whale";
      break;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="grid md:grid-cols-2 gap-4 mb-8"
    >
      <div className="stats shadow">
        <div className="stat overflow-hidden">
          <motion.div
            variants={elementVariants}
            className="stat-title"
            custom={1}
          >
            You own
          </motion.div>
          <motion.div
            variants={elementVariants}
            className="stat-value text-secondary"
            custom={2}
          >
            {uri.length} NFT{uri.length !== 1 ? "s" : ""}
          </motion.div>
          {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
        </div>
      </div>
      <div className="stats shadow">
        <div className="stat overflow-hidden">
          <motion.div
            variants={elementVariants}
            className="stat-title"
            custom={3}
          >
            You are APD
          </motion.div>
          <motion.div
            variants={elementVariants}
            className="stat-value text-secondary"
            custom={4}
          >
            {role}
          </motion.div>
          {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
        </div>
      </div>
      <motion.div
        variants={elementVariants}
        className="md:col-span-2 justify-self-center"
      >
        <CollectionButton />
      </motion.div>
    </motion.div>
  );
}
