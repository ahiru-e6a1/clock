import React, { useEffect, useState } from "react";
import { Inter } from "@next/font/google";
import styles from "../../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export const Clock = () => {
  const [currentDatetime, setCurrentDatetime] = useState(new Date());
  const currentYear = currentDatetime.getFullYear();
  const currentMonth = currentDatetime.getMonth() + 1;
  const currentDate = currentDatetime.getDate();
  const currentDayOfWeek = ["日", "月", "火", "水", "木", "金", "土"][
    currentDatetime.getDay()
  ];

  // 時刻は1桁の場合、ゼロ埋めして必ず2桁で表示する
  const currentHours = ("00" + currentDatetime.getHours()).slice(-2);
  const currentMinutes = ("00" + currentDatetime.getMinutes()).slice(-2);

  const todaysDate = `${currentYear}年${currentMonth}月${currentDate}日 (${currentDayOfWeek})`;
  const currentTime = `${currentHours}:${currentMinutes}`;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDatetime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <p>{todaysDate}</p>
          </div>
        </div>

        <div className={styles.center}>
          <p className={styles.time}>{currentTime}</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2 className={inter.className}>
              current time <span>-&gt;</span>
            </h2>
            <p className={inter.className}>現在時刻の表示</p>
          </div>
        </div>
      </main>
      ;
    </>
  );
};
