import { useState, useEffect } from "react";
import "./CountdownTimer.scss";
import { getRemainingTimeUntilMsTimestamp } from "./Utils/CountdownTimerUtils";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const CountdownTimer = ({ countdownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <div className="countdown-timer">
      <span>{remainingTime.days}</span>
      <span>Ngày</span>
      <span className="two-numbers">{remainingTime.hours}</span>
      <span>Giờ</span>
      <span className="two-numbers">{remainingTime.minutes}</span>
      <span>Phút</span>
      <span className="two-numbers">{remainingTime.seconds}</span>
      <span>Giây</span>
    </div>
  );
};

export default CountdownTimer;
