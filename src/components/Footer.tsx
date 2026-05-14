"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Footer.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const links = {
  arsip: [
    "Merdeka Belajar Episode 1 (Des 2019)",
    "Kampus Merdeka (Feb 2020)",
    "Pembatalan UN 2020 (Mar 2020)",
    "Bantuan Kuota Belajar (Sep 2020)",
  ],
  sumber: [
    "Wikipedia — Nadiem Makarim",
    "Kemendikbud RI",
    "CNBC Indonesia",
    "Tempo, Detik, Republika, Suara Surabaya",
  ],
  kredit: [
    "Foto: Wikimedia Commons",
    "Animasi: GSAP & ScrollTrigger",
    "Stack: Next.js (App Router)",
    "Tipografi: Inter & Inter Tight",
  ],
};

export default function Footer() {
  const rootRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const els = gsap.utils.toArray<HTMLElement>(
        `.${styles.footer} [data-reveal]`,
      );
      els.forEach((el) => {
        gsap.from(el, {
          y: 24,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });
    },
    { scope: rootRef },
  );

  return (
    <footer ref={rootRef} className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <h2 className={styles.headline} data-reveal>
            15 bulan pertama, <em>cetak biru</em> pendidikan Indonesia.
          </h2>
          <p className={styles.body} data-reveal>
            Lini masa ini meringkas kebijakan publik dan momen penting Nadiem
            Makarim sebagai Mendikbud RI dari Oktober 2019 hingga Desember
            2020. Setiap kartu bulan didukung referensi terbuka dan foto
            dengan lisensi bebas dari Wikimedia Commons.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.col} data-reveal>
            <h3>Arsip kebijakan</h3>
            <ul>
              {links.arsip.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
          <div className={styles.col} data-reveal>
            <h3>Sumber referensi</h3>
            <ul>
              {links.sumber.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
          <div className={styles.col} data-reveal>
            <h3>Kredit</h3>
            <ul>
              {links.kredit.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom} data-reveal>
          <span>NM // Linimasa // 2019 — 2020</span>
          <span>Statis · Mobile First · GSAP</span>
        </div>
      </div>
    </footer>
  );
}
