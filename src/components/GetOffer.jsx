import React, { useState, useEffect } from 'react';

const GetOffer = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const offerEnds = new Date('2023-12-31T23:59:59'); // Set your offer end date and time

    const difference = offerEnds - now;

    if (difference > 0) {
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      };
    }

    return {
      hours: '00',
      minutes: '00',
      seconds: '00',
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []); // empty dependency array ensures that the effect runs only once on component mount

  return (
    <div className='mb-4'>
      <span className="countdown font-mono text-2xl">
        <span style={{ "--value": timeLeft.hours }}>{timeLeft.hours}</span>h
        <span style={{ "--value": timeLeft.minutes }}>{timeLeft.minutes}</span>m
        <span style={{ "--value": timeLeft.seconds }}>{timeLeft.seconds}</span>s
      </span>
    </div>
  );
};

export default GetOffer;
