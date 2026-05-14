"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { timeline } from "@/data/timeline";
import TimelineEntry from "./TimelineEntry";
import styles from "./Timeline.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Timeline() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from(`.${styles.header} [data-reveal]`, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: `.${styles.header}`,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      const progressBar = rootRef.current?.querySelector<HTMLElement>(
        `.${styles.progress}`,
      );
      const rail = rootRef.current?.querySelector<HTMLElement>(
        `.${styles.rail}`,
      );

      if (progressBar && rail) {
        gsap.to(progressBar, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: rail,
            start: "top 60%",
            end: "bottom 60%",
            scrub: true,
          },
        });
      }

      const entries = gsap.utils.toArray<HTMLElement>(
        `.${styles.entries} > li`,
      );

      entries.forEach((entry) => {
        const node = entry.querySelector<HTMLElement>("[class*='node']");
        const meta = entry.querySelectorAll<HTMLElement>(
          "[class*='meta'], [class*='monthBlock'], [class*='headline'], [class*='credit'], [class*='lead']",
        );
        const list = entry.querySelectorAll<HTMLElement>("[class*='item']");
        const imageWrap = entry.querySelector<HTMLElement>(
          "[class*='imageWrap']",
        );
        const image = entry.querySelector<HTMLElement>(
          "[class*='imageInner'] img",
        );

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: entry,
            start: "top 78%",
            toggleActions: "play none none none",
            onEnter: () => entry.setAttribute("data-active", "true"),
            onEnterBack: () => entry.setAttribute("data-active", "true"),
          },
        });

        if (node) tl.from(node, { scale: 0, ease: "back.out(2)", duration: 0.5 }, 0);

        tl.from(
          meta,
          {
            y: 28,
            opacity: 0,
            stagger: 0.06,
            duration: 0.7,
            ease: "power3.out",
          },
          0.05,
        );

        if (imageWrap) {
          tl.from(
            imageWrap,
            {
              y: 36,
              opacity: 0,
              duration: 0.9,
              ease: "power3.out",
            },
            0.1,
          );
        }

        tl.from(
          list,
          {
            x: 22,
            opacity: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "power2.out",
          },
          0.35,
        );

        if (image) {
          gsap.fromTo(
            image,
            { scale: 1.18, yPercent: -4 },
            {
              scale: 1.0,
              yPercent: 4,
              ease: "none",
              scrollTrigger: {
                trigger: entry,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }
      });

      ScrollTrigger.refresh();
    },
    { scope: rootRef },
  );

  return (
    <section
      id="linimasa"
      ref={rootRef}
      className={styles.section}
      aria-label="Lini masa Nadiem Makarim"
    >
      <div className="container">
        <header className={styles.header}>
          <p className={styles.kicker} data-reveal>
            Linimasa / 15 Bulan
          </p>
          <h2 className={styles.title} data-reveal>
            Setiap bulan, satu <em>langkah</em> yang membentuk pendidikan
            Indonesia.
          </h2>
          <p className={styles.legend} data-reveal>
            Okt 2019 — Des 2020 // gulir untuk menelusuri.
          </p>
        </header>

        <div className={styles.rail}>
          <span className={styles.progress} aria-hidden />
          <ul className={styles.entries}>
            {timeline.map((entry, idx) => (
              <TimelineEntry
                key={entry.id}
                entry={entry}
                side={idx % 2 === 0 ? "left" : "right"}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
