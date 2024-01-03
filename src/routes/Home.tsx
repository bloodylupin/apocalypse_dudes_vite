import { motion } from "framer-motion";
import { pageVariants, elementVariants } from "../App";
import { Link } from "react-router-dom";
import HomeInfo from "./Home/HomeInfo";
import { ApdLogo } from "../assets/ApdLogos";

export default function Home() {
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
        style={{ backgroundImage: 'url("./img/bg-home.jpg")' }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <motion.div variants={elementVariants} className="mb-5">
              <ApdLogo />
            </motion.div>
            <h1 className="indent-[-1000000px]">Apocalypse Dudes</h1>
            <motion.h2
              variants={elementVariants}
              className="mb-5 text-2xl text-secondary"
              style={{ textShadow: "3px 3px 7px #000" }}
            >
              AI generated Cronos NFT Collection
            </motion.h2>

            <div className="flex gap-4 flex-col md:flex-row items-center justify-center">
              <motion.div variants={elementVariants}>
                <Link to="/mint" className="btn btn-primary btn-wide">
                  Mint
                </Link>
              </motion.div>
              <motion.div variants={elementVariants}>
                <HomeInfo />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
