import { motion } from "framer-motion";
import clsx from "clsx";

import { faqData } from "./data/data";
import { variants } from "./data/variants";

export default function FAQ({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="grid place-content-center gap-4 min-h-[90vh] prose mx-auto">
      <h2>FAQ</h2>
      {faqData.map((faq) => (
        <motion.div
          initial="hidden"
          whileInView={clsx(isOpen ? "visible" : "hidden")}
          variants={variants}
          className="collapse bg-info"
          key={faq.question}
        >
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-info-content text-xl font-medium p-4">
            {faq.question}
          </div>
          <div className="collapse-content bg-info-content">{faq.answer}</div>
        </motion.div>
      ))}
    </div>
  );
}
