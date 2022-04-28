export default function sectionTitle({ children, h1, h2, h3, p, widthRemove }) {
  return (
    <div
      className={` ${!widthRemove && "w-[800px]"} mt-28  max-w-[90vw] mx-auto`}
    >
      <div className="flex flex-col items-center justify-center pt-2 space-y-8 leading-none tracking-tight text-center">
        {/* title */}
        <div className="font-bold text-black title-normal">
          {h1 && <h1 className="text-[3.6rem] md:text-[5.3rem] ">{h1}</h1>}
          {h2 && <h2 className="text-[3.6rem] md:text-[5.3rem]">{h2}</h2>}
          {h3 && <h3 className="text-[2.1rem] md:text-[4.1rem]">{h3}</h3>}
        </div>
        {/* subtitle */}
        <div className="text-2xl font-semibold md:text-2xl text-black-2">
          {p && <p>{p}</p>}
        </div>

        {children}
      </div>
    </div>
  );
}
