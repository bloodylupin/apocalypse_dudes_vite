import useCountdown from "../hooks/useCountdown";
import { CalendarDays, Clock12, Clock9, AlarmClock } from "lucide-react";

import { useState } from "react";

import { motion } from "framer-motion";

export default function Countdown() {
  const timeLeft = useCountdown()!;
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
    visible: (rnd: number) => ({
      filter: "blur(0px)",
      rotate: 0 + rnd,
    }),
  };
  const [rotate, setRotate] = useState(0);
  const ROTATION = 7;
  const mintDate = new Date("August 15, 2023 21:00:00");
  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center auto-cols-max"
      >
        {Object.entries(timeLeft).map(([key, value]) =>
          key !== "difference" ? (
            <motion.div
              variants={elementVariants}
              key={key}
              custom={
                Math.floor(Math.random() * ROTATION) -
                +Math.floor(Math.random() * ROTATION)
              }
              animate={{
                rotate:
                  rotate +
                  Math.floor(Math.random() * ROTATION) -
                  +Math.floor(Math.random() * ROTATION),
              }}
              onTap={() => {
                setRotate(
                  Math.floor(Math.random() * ROTATION) -
                    +Math.floor(Math.random() * ROTATION)
                );
              }}
              className="flex flex-col p-2 bg-neutral rounded-box items-center gap-4 shadow shadow-primary"
            >
              <span className="countdown text-5xl overflow-hidden">
                {/* @ts-expect-error */}
                <span style={{ "--value": value }}></span>
              </span>
              {key === "days" ? <CalendarDays /> : null}
              {key === "hours" ? <Clock12 /> : null}
              {key === "minutes" ? <Clock9 /> : null}
              {key === "seconds" ? <AlarmClock /> : null}
            </motion.div>
          ) : null
        )}
      </motion.div>
      <h2 className="text-center mt-16">Mint Date</h2>
      <h3 className="text-info px-6 py-4 mt-2 rounded-lg bg-info-content w-fit mx-auto bg-opacity-50">
        August{" "}
        <span className="indicator mr-2">
          {mintDate.getDate()}
          <span className="indicator-item text-[8px] text-info">th</span>
        </span>
        , {mintDate.getHours()} : 00 : 00
      </h3>
    </>
  );
}
