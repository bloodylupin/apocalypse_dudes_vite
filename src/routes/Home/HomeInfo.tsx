import { useEffect, useRef, useState } from "react";

import { motion, stagger, useAnimate, useInView } from "framer-motion";
import clsx from "clsx";
// import { Link } from "react-router-dom";

import { XCircle } from "lucide-react";

import SplitType from "split-type";
import FAQ from "./FAQ";
import { Link } from "react-router-dom";
import Team from "./Team";

import Utilities from "./Utilities";
import { ApdLogo, ApdLogotipo } from "../../assets/ApdLogos";

export default function HomeInfo() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const dialogVariants = {
    visible: {
      opacity: 1,
      filter: "blur(0px)",
    },
    hidden: {
      opacity: 0,
      filter: "blur(50px)",
    },
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    if (!modalRef.current) return;
    setIsOpen(modalRef.current?.open);
    return () => setIsOpen(false);
  }, [modalRef.current?.open]);

  const [scope, animate] = useAnimate();
  const inView = useInView(scope);

  useEffect(() => {
    if (!isOpen || !inView) return;

    const splittedElements = new SplitType(".split");
    const charsAnimation = animate(
      splittedElements.chars!,
      {
        scale: [0, 1],
        rotate: [-45, 0],
        rotateY: [90, 45],
        y: [64, 0],
      },
      { delay: stagger(0.027) }
    );

    const closeAnimation = animate(
      "#close",
      {
        opacity: [0, 1],
        scale: [0, 1],
        filter: ["blur(50px)", "blur(0px)"],
      },
      { delay: 17 }
    );
    return () => {
      charsAnimation.stop();
      closeAnimation.stop();
    };
  }, [isOpen, inView]);

  return (
    <>
      {/* Open the modal using ID.showModal() method */}
      <button
        className="btn btn-outline btn-info btn-wide"
        onClick={() => {
          modalRef.current?.showModal();
          setIsOpen(true);
        }}
      >
        info
      </button>
      <motion.dialog
        variants={dialogVariants}
        initial="hidden"
        animate={clsx(isOpen ? "visible" : "hidden")}
        ref={modalRef}
        className="modal"
      >
        <form
          method="dialog"
          className="modal-box max-w-none overflow-x-hidden prose bg-opacity-90"
          ref={scope}
        >
          <div className="grid place-content-center min-h-[90vh] mx-auto overflow-hidden">
            <button
              onClick={() => setIsOpen(false)}
              id="close"
              className="btn btn-circle btn-ghost ml-auto"
            >
              <XCircle />
            </button>

            <h2 className="split">We are robots</h2>
            <motion.div
              initial={{ scale: 0, filter: "blur(50px)" }}
              animate={clsx(
                isOpen
                  ? { scale: 1, filter: "blur(0px)" }
                  : { scale: 0, filter: "blur(50px)" }
              )}
              whileInView={{ scale: 1, filter: "blur(0px)" }}
            >
              <ApdLogotipo />
            </motion.div>
            <p className="prose mx-auto split">
              In a grim dystopian future, where vibrant jungles had swallowed
              the once bustling cities, the world was ruled by the Apocalypse
              Dudes — an army of kaleidoscopic robots.
            </p>
            <p className="prose mx-auto split">
              Fear pervaded the hearts of those who dared to challenge the
              Dudes, for they were relentless and unwavering in their pursuit of
              control. The robots' mechanical eyes glowed menacingly, casting an
              ominous aura over the jungle landscape. The sky, once clear, was
              now obscured by a thick blanket of pollution, further adding to
              the dystopian nightmare.
            </p>
            <p className="prose mx-auto split">
              Within this chaotic world, the struggle for survival continued,
              with a few courageous souls clinging to the hope of one day
              dismantling the ruthless reign of the Apocalypse Dudes and
              reclaiming the lost glory of humanity.
            </p>
          </div>
          <motion.div
            initial={{ x: "100%" }}
            whileInView={{ x: "0%" }}
            className="prose mx-auto"
          >
            <ApdLogo />
          </motion.div>

          {/* <Link to="/mint" className="btn btn-primary my-16 btn-wide">
            <span className="animate-pulse">Mint</span>
          </Link> */}
          <Utilities isOpen={isOpen} />
          <FAQ isOpen={isOpen} />
          <Team isOpen={isOpen} />
          <Link to="/mint" className="btn btn-primary my-16 btn-wide">
            <span className="animate-pulse">Mint</span>
          </Link>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => setIsOpen(false)}>close</button>
        </form>
      </motion.dialog>
    </>
  );
}
