/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../../styles/Home.module.css";
import { BsArrowDownCircle } from "react-icons/bs";

const HeroSection = () => {
  return (
    <main className={styles.main}>
      <img src="/assets/hero.png" alt="" />
      <h1 className={styles.title}>
        Karhu <br />
        Summer Camp
      </h1>
      <a href="" className={styles.shopHeroButton}>
        Shop Collection
      </a>
      <a href="#collections" className={styles.downArrowHero}>
        <BsArrowDownCircle size={48} color="white" />
      </a>
    </main>
  );
};

export default HeroSection;
