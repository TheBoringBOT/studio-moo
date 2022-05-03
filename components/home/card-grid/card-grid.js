import Container from "../../layout/container";
import Card from "./card";
import Layout from "../../layout/layout";

export default function CardGrid() {
  return (
    <section className="md:px-10">
      <Container>
        <div className=" grid  grid-cols-[repeat(2, 2fr)] gap-y-2.5 gap-x-2.5">
          <Card size={2} />
          <Card size={1} />
          <Card size={1} delay={0.5} />
          <Card size={2} />
        </div>
      </Container>
    </section>
  );
}
