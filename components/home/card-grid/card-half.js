import styles from "./card.module.css";
export default function CardHalf({ background, color, children }) {
  return (
    <article
      className={`${styles.card} ${background && background} ${
        color && color
      } col-span-2 md:col-span-1 min-h-card-sm lg:min-h-card-lg`}
    >
      {children}
    </article>
  );
}
