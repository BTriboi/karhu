/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Home.module.css";
// import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { BsArrowRightCircle } from "react-icons/bs";

const Collections = ({ collections }) => {
  const slideRef = useRef(null);
  const rightArrow = useRef(null);

  const [translate, setTranslate] = useState("");

  const transitionEnd = () => {
    setTranslate("translate(-360px)");
    slideRef.current.appendChild(slideRef.current.firstElementChild);
    setTimeout(function () {
      setTranslate("translate(0%)");
    }, 500);
  };

  return (
    <div className={styles.colContainer}>
      <BsArrowRightCircle
        className={styles.rightArrow}
        color="white"
        size={48}
        ref={rightArrow}
        onClick={transitionEnd}
      />
      <div ref={slideRef} className={styles.collections} id="collections">
        {collections.map((collection) => {
          return (
            <span key={collection.id}>
              <div style={{ transform: `${translate}` }}>
                <img src={collection.image.src} alt="" />
                <span>
                  <h1>{collection.title}</h1>
                  <a href="#" className={styles.shopColButton}>
                    Shop Now
                  </a>
                </span>
              </div>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Collections;
