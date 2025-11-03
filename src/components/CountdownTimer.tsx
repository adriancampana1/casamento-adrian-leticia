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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        Faltam apenas
      </motion.h3>

      <div className="countdown-timer">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.key}
            className="countdown-unit"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
            }}
          >
            <div className="countdown-number">
              {unit.value.toString().padStart(2, "0")}
            </div>
            <div className="countdown-label">{unit.label}</div>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="countdown-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        para o nosso grande dia!
      </motion.p>
    </div>
  );
};

export default CountdownTimer;
