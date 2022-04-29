import Spacer from "../../layout/spacer";

export default function CardGrid({children}) {
  return (
    <>
      <Spacer />
      <section className="grid  grid-cols-[repeat(2, 2fr)] gap-y-2.5">


        {children}
      </section>
    </>
  );
}
