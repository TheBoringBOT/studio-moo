import Card from "./card";

export default function CardGrid() {
  return (
    <>
      <section className=" grid  grid-cols-[repeat(2, 2fr)] gap-y-2.5 gap-x-2.5">
        <Card size={2} />
        <Card size={1} />
        <Card size={1} delay={0.5} />
        <Card size={2} />
      </section>
    </>
  );
}
