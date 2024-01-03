import clsx from "clsx";
import { motion } from "framer-motion";

import { utilitiesData } from "./data/data";

export default function Utilities({ isOpen }: { isOpen: boolean }) {
  const elementVariants = {
    visible: {
      filter: "blur(0px)",
      y: 0,
      scale: 1,
    },
    hidden: {
      filter: "blur(50px)",
      y: 64,
      scale: 0,
    },
  };
  return (
    <>
      <motion.h3
        variants={elementVariants}
        initial="hidden"
        whileInView={clsx(isOpen ? "visible" : "hidden")}
        className="font-bold text-lg text-secondary"
      >
        Utilities
      </motion.h3>
      {utilitiesData.map((p, i) => (
        <motion.div
          initial="hidden"
          key={i}
          className="grid md:grid-cols-2 gap-8"
        >
          <div
            className={clsx(
              "m-auto w-3/4",
              i % 2 ? "md:col-start-2 md:row-start-1" : ""
            )}
          >
            <motion.h4
              variants={elementVariants}
              initial="hidden"
              whileInView={clsx(isOpen ? "visible" : "hidden")}
              className="m-auto w-3/4 text-info"
            >
              {p.title}
            </motion.h4>
            <motion.p
              variants={elementVariants}
              initial="hidden"
              whileInView={clsx(isOpen ? "visible" : "hidden")}
              className="m-auto w-3/4"
            >
              {p.content}
            </motion.p>
          </div>
          <motion.img
            variants={elementVariants}
            initial="hidden"
            whileInView={clsx(isOpen ? "visible" : "hidden")}
            src={`./img/info_image-${i}.jpg`}
            alt={`ai-avatar-#${i + 1}`}
            className={clsx(
              "h-64 w-full rounded-full object-top object-cover",
              i % 2 ? "md:col-start-1 md:row-start-1" : ""
            )}
          />
        </motion.div>
      ))}
    </>
  );
}
