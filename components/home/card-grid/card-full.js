import styles from "./card.module.css";
export default function CardFull({ background, color, children }) {
  return (
    <article
      className={`${styles.card} ${background && background} ${
        color && color
      } rounded-md lg:rounded-lg col-span-2 min-h-card-sm lg:min-h-card-lg`}
    >
      {children}
    </article>
  );
}
