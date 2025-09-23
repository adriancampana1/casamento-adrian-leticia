import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./CountdownTimer.css";

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Set initial value
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "Dias", value: timeLeft.days, key: "days" },
    { label: "Horas", value: timeLeft.hours, key: "hours" },
    { label: "Minutos", value: timeLeft.minutes, key: "minutes" },
    { label: "Segundos", value: timeLeft.seconds, key: "seconds" },
  ];

  return (
    <div className="countdown-container">
      <motion.h3
        className="countdown-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        Faltam apenas
      </motion.h3>

      <div className="countdown-timer">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.key}
            className="countdown-unit"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 1 + index * 0.1,
              type: "spring",
              stiffness: 120,
            }}
          >
            <motion.div
              className="countdown-number"
              key={unit.value}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              {unit.value.toString().padStart(2, "0")}
            </motion.div>
            <div className="countdown-label">{unit.label}</div>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="countdown-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
      >
        para o nosso grande dia!
      </motion.p>
    </div>
  );
};

export default CountdownTimer;
