"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ProgressIndicator.module.css";

export default function ProgressIndicator() {
  const fillRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const fill = fillRef.current;
    if (!fill) return;

    const update = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      fill.style.width = `${(pct * 100).toFixed(2)}%`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className={styles.bar} aria-hidden>
      <div ref={fillRef} className={styles.fill} />
    </div>
  );
}
