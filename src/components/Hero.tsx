"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./Hero.module.css";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.set(`.${styles.reveal}`, { yPercent: 110 });
      gsap.set(`.${styles.byline}`, { y: 24, opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(`.${styles.reveal}`, {
        yPercent: 0,
        duration: 1.05,
        stagger: 0.08,
        delay: 0.1,
      }).to(
        `.${styles.byline}`,
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.35",
      );

      gsap.to(`.${styles.dot}`, {
        scale: 1.6,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: "sine.inOut",
        transformOrigin: "center center",
      });
    },
    { scope: rootRef },
  );

  return (
    <header ref={rootRef} className={styles.hero}>
      <div className={styles.topbar}>
        <span className={styles.brand}>
          <span className={styles.dot} aria-hidden />
          NM/2019–2020
        </span>
        <span className={styles.meta}>
          <span>Mendikbud RI</span>
          <span>Linimasa</span>
        </span>
      </div>

      <div className={styles.stage}>
        <h1 className={styles.headline}>
          <span>
            <span className={styles.reveal}>Nadiem</span>
          </span>
          <span>
            <span className={styles.reveal}>
              <em>Makarim</em>
            </span>
          </span>
          <span>
            <span className={styles.reveal}>15 Bulan</span>
          </span>
          <span>
            <span className={styles.reveal}>Mendikbud</span>
          </span>
        </h1>
      </div>

      <div className={styles.footerHero}>
        <span className={styles.byline}>
          <span className={styles.bylineMark}>{"// arsip"}</span>
          <span>Okt 2019 — Des 2020 / Kabinet Indonesia Maju</span>
        </span>
        <span className={styles.scroll}>
          gulir ke bawah
          <span className={styles.scrollArrow} aria-hidden />
        </span>
      </div>
    </header>
  );
}
