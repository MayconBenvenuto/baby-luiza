import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Clock } from "lucide-react";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <Card className="mx-auto max-w-md shadow-xl bg-gradient-to-r from-pink-400/20 to-purple-400/20 backdrop-blur-sm border-pink-200">
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <Clock className="w-8 h-8 mx-auto text-pink-600 mb-2" />
          <h2 className="text-2xl font-bold text-gray-800">Faltam apenas:</h2>
        </div>
        
        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="bg-white/80 rounded-lg p-3 shadow-md">
            <div className="text-2xl font-bold text-pink-600">{timeLeft.days}</div>
            <div className="text-xs text-gray-600 font-medium">Dias</div>
          </div>
          <div className="bg-white/80 rounded-lg p-3 shadow-md">
            <div className="text-2xl font-bold text-purple-600">{timeLeft.hours}</div>
            <div className="text-xs text-gray-600 font-medium">Horas</div>
          </div>
          <div className="bg-white/80 rounded-lg p-3 shadow-md">
            <div className="text-2xl font-bold text-pink-600">{timeLeft.minutes}</div>
            <div className="text-xs text-gray-600 font-medium">Min</div>
          </div>
          <div className="bg-white/80 rounded-lg p-3 shadow-md">
            <div className="text-2xl font-bold text-purple-600">{timeLeft.seconds}</div>
            <div className="text-xs text-gray-600 font-medium">Seg</div>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Para a festa mais doce do ano! 🍭
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CountdownTimer;