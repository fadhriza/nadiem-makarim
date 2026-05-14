"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./Marquee.module.css";

gsap.registerPlugin(useGSAP);

const phrases = [
  "Merdeka Belajar",
  "Kampus Merdeka",
  "Belajar dari Rumah",
  "Asesmen Kompetensi Minimum",
  "Bantuan Kuota Belajar",
  "Transformasi Digital Pendidikan",
];

export default function Marquee() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const track = rootRef.current?.querySelector(`.${styles.track}`);
      if (!track) return;
      gsap.to(track, {
        xPercent: -50,
        duration: 32,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: rootRef },
  );

  const loop = (
    <span aria-hidden>
      {phrases.map((p, i) => (
        <span key={`${p}-${i}`}>
          {p}
          <span className={styles.bullet} aria-hidden />
        </span>
      ))}
    </span>
  );

  return (
    <section ref={rootRef} className={styles.marquee} aria-label="Tema utama">
      <div className={styles.track}>
        {loop}
        {loop}
      </div>
    </section>
  );
}
