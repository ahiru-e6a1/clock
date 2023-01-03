import React from "react";
import { Inter } from "@next/font/google";
import styles from "../../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export const Clock = () => {
  const currentDatetime = new Date();
  const currentYear = currentDatetime.getFullYear();
  const currentMonth = currentDatetime.getMonth() + 1;
  const currentDate = currentDatetime.getDate();
  const currentHours = currentDatetime.getHours();
  const currentMinutes = currentDatetime.getMinutes();

  const todaysDate = `${currentYear}年${currentMonth}月${currentDate}日`;
  const currentTime = `${currentHours}:${currentMinutes}`;

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
