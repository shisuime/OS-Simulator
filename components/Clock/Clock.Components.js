import Styles from "./Clock.module.css";
import React, { useState, useEffect } from "react";

function DigitalClock({ initialTime }) {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = time ? time.toLocaleTimeString() : "";

  return (
    <div className={Styles.Wholepage}>
      <div className={Styles.Back}>Back</div>
      <div className={Styles.Digital}>Digital Clock</div>
      <div className={Styles.Formatted}>{formattedTime}</div>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      initialTime: new Date().toISOString(),
    },
  };
}

export default DigitalClock;
