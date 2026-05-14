"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Intro.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const stats = [
  { value: "15", suffix: "bulan", label: "rentang waktu" },
  { value: "4+1", suffix: "", label: "episode merdeka belajar" },
  { value: "1", suffix: "pandemi", label: "tantangan terbesar" },
  { value: "270jt", suffix: "", label: "warga terdampak kebijakan" },
];

export default function Intro() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const ctxItems = gsap.utils.toArray<HTMLElement>(
        `.${styles.intro} [data-reveal]`,
      );
      ctxItems.forEach((el) => {
        gsap.from(el, {
          y: 32,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.from(`.${styles.stat}`, {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: `.${styles.stats}`,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} className={styles.intro}>
      <div className="container">
        <p className={styles.kicker} data-reveal>
          Prolog / Konteks
        </p>
        <h2 className={styles.title} data-reveal>
          Dari ruang rapat startup ke <em>kebijakan pendidikan</em> 270 juta
          rakyat Indonesia.
        </h2>
        <div className={styles.body}>
          <p data-reveal>
            <strong>Nadiem Anwar Makarim</strong> dilantik sebagai Menteri
            Pendidikan dan Kebudayaan pada 23 Oktober 2019. Ia membawa cara
            kerja gaya startup ke kementerian dengan 4 juta lebih guru dan
            puluhan juta siswa.
          </p>
          <p data-reveal>
            Lini masa ini menelusuri langkahnya setiap bulan: peluncuran
            Merdeka Belajar, lahirnya Kampus Merdeka, hingga pivot besar
            ketika pandemi COVID-19 memaksa pendidikan Indonesia berpindah ke
            ruang digital.
          </p>
        </div>

        <ul className={styles.stats}>
          {stats.map((s) => (
            <li key={s.label} className={styles.stat}>
              <span className={styles.statValue}>
                {s.value}
                {s.suffix ? <span> {s.suffix}</span> : null}
              </span>
              <span className={styles.statLabel}>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
