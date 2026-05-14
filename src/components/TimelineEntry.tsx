"use client";

import { forwardRef } from "react";
import type { TimelineEntry as TEntry } from "@/data/timeline";
import styles from "./TimelineEntry.module.css";

type Props = {
  entry: TEntry;
  side: "left" | "right";
};

const TimelineEntry = forwardRef<HTMLLIElement, Props>(function TimelineEntry(
  { entry, side },
  ref,
) {
  return (
    <li
      ref={ref}
      className={styles.entry}
      data-side={side}
      data-active="false"
      data-entry-id={entry.id}
    >
      <span className={styles.node} aria-hidden />

      <div className={styles.meta}>
        <span className={styles.index}>{entry.index}</span>
        <span className={styles.year}>{entry.year}</span>
        <span>{entry.monthLabel}</span>
      </div>

      <div className={styles.monthBlock}>
        <h3 className={styles.month}>{entry.monthShort}</h3>
        <span className={styles.monthYear}>/ {entry.year}</span>
      </div>

      <h4 className={styles.headline}>{entry.headline}</h4>

      <div className={styles.imageWrap}>
        <div className={styles.imageInner}>
          <img
            className={styles.image}
            src={entry.image.src}
            alt={entry.image.alt}
            loading="lazy"
            decoding="async"
            width={1200}
            height={900}
          />
        </div>
        <span className={styles.imageBadge}>
          {entry.monthShort} {entry.year}
        </span>
      </div>

      <p className={styles.credit}>Foto: {entry.image.credit}</p>

      <p className={styles.lead}>{entry.lead}</p>

      <ul className={styles.list}>
        {entry.highlights.map((h) => (
          <li key={h} className={styles.item}>
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </li>
  );
});

export default TimelineEntry;
