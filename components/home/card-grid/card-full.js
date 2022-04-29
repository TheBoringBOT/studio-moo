export default function CardFull({ background, color, children }) {
  return (
    <article
      className={`${background ? background : "bg-white"} ${
        color ? color : "text-black"
      }  card  col-span-2 min-h-card-sm md:min-h-card-md`}
    >
      <div className="card-content">{children}</div>
    </article>
  );
}
