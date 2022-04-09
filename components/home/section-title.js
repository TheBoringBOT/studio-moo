export default function sectionTitle({ children, h1, h2, h3, p }) {
  return (
    <div className=" my-[18vh] w-[800px] max-w-[90vw] mx-auto">
      <div className=" flex flex-col text-center justify-center items-center  space-y-10 leading-tight">
        {/* title */}
        <div className=" text-[2.4rem] md:text-[4.3rem] title-normal text-bg-primary ">
          {h1 && <h1>{h1}</h1>}
          {h2 && <h2>{h2}</h2>}
          {h3 && <h3>{h3}</h3>}
        </div>
        {/* subtitle */}
        <div className="text-2xl md:text-3xl font-normal text-text-secondary">
          {p && <p>{p}</p>}
        </div>
        {children}
      </div>
    </div>
  );
}
