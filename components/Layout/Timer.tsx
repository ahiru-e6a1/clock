import React from "react";
import { Inter } from "@next/font/google";
import styles from "../../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export const Timer = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <p>Timer</p>
          </div>
        </div>

        <div className={styles.center}>
          <p className={styles.time}>02:30</p>
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
    </>
  );
};
