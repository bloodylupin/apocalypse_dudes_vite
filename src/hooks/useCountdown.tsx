import { useState, useEffect } from "react";

type CountdownType = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  difference: number;
};
export default function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    difference: 1,
  } as CountdownType);

  useEffect(() => {
    const timer = setTimeout(() => {
      const difference = +new Date("August 15, 2023 21:00:00") - +new Date();

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        difference,
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft.difference]);

  return timeLeft;
}
