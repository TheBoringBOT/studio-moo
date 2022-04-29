export default function CardHalf({ background, color, children }) {
  return (
    <article
      className={`${background ? background : "bg-white"} ${
        color ? color : "text-black"
      } shadow-card
     col-span-2 md:col-span-1   `}
    >
      <div className="card">{children}</div>
    </article>
  );
}
