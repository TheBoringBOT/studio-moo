import FadeInCard from "../../animation/fade-in-card";

export default function Card({ size, delay, background, color, children }) {
  return (
    <div
      className={`${size && size === 2 ? "md:col-span-2" : "md:col-span-1"} `}
    >
      <FadeInCard delay={delay}>
        <article
          className={`${background ? background : "bg-white"} ${
            color ? color : "text-black"
          } card flex 
       `}
        >
          <div className="flex-grow card-content">{children}</div>
        </article>
      </FadeInCard>
    </div>
  );
}
