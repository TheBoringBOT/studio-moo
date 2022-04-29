import Spacer from "../../layout/spacer";
import CardHalf from "./card-half";
import CardFull from "./card-full";

export default function CardGrid() {
  return (
    <>
      <section className=" grid  grid-cols-[repeat(2, 2fr)] gap-y-2.5 gap-x-2.5">
        <CardFull />
        <CardHalf />
        <CardHalf />
      </section>
    </>
  );
}
