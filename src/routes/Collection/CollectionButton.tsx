import { useRef } from "react";
import { motion } from "framer-motion";
import { useCollection } from "../../web3/CollectionProvider";
import Nft from "./Nft";
import clsx from "clsx";

export default function CollectionButton() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const nftVariants = {
    visible: (i: number) => ({
      filter: "blur(0px)",
      y: 0,
      scale: 1,
      transition: { delay: 0.27 * i },
    }),
    hidden: {
      filter: "blur(50px)",
      y: 64,
      scale: 0,
    },
  };
  const { uri } = useCollection();
  return (
    <>
      <button
        onClick={() => modalRef.current?.showModal()}
        className={clsx(
          "btn btn-primary md:col-span-2 mx-auto btn-wide",
          uri.length > 0 ? "" : "btn-disabled"
        )}
        disabled={!uri.length}
      >
        show
      </button>
      <dialog className="modal bg-opacity-90" ref={modalRef}>
        <form
          method="dialog"
          className="modal-box max-w-none grid grid-cols-2 md:grid-cols-4 bg-opacity-90"
        >
          {uri.map((address, i) => (
            <motion.div
              variants={nftVariants}
              animate="hidden"
              whileInView="visible"
              // viewport={{ margin: "100px 0px -100px 0px" }}
              key={address}
              className="rounded-lg bg-base-100 p-2"
              custom={((i % 2) + Math.round(Math.random() * 5) / 2.5) / 2}
            >
              <Nft data={address} />
            </motion.div>
          ))}
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
