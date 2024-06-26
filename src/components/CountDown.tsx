"use client";
import { useEffect, useState } from "react";
const targetDate = new Date("2024-07-07T16:30:00");

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState(targetDate.getTime() - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate.getTime() - Date.now());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);
  return (
    <div className="flex flex-row md:gap-4 gap-2 justify-between md:justify-around w-full md:w-auto mt-8">
      <div className="flex flex-col w-20 h-20 bg-primary items-center text-center text-lg justify-center rounded-lg">
        <span className="font-bold text-white">{days < 0 ? 0 : days}</span>
        <span className="text-xs mt-2 text-white">DIAS</span>
      </div>
      <div className="flex flex-col w-20 h-20 bg-primary items-center text-center text-lg justify-center rounded-lg">
        <span className="font-bold text-white">{hours < 0 ? 0 : hours}</span>
        <span className="text-xs mt-2 text-white">HORAS</span>
      </div>
      <div className="flex flex-col w-20 h-20 bg-primary items-center text-center text-lg justify-center rounded-lg">
        <span className="font-bold text-white">{minutes < 0 ? 0 : minutes}</span>
        <span className="text-xs mt-2 text-white">MINUTOS</span>
      </div>
      <div className="flex flex-col w-20 h-20 bg-primary items-center text-center text-lg justify-center rounded-lg">
        <span className="font-bold text-white">{seconds < 0 ? 0 : seconds}</span>
        <span className="text-xs mt-2 text-white">SEGUNDOS</span>
      </div>
    </div>
  );
};

export default CountDown;
