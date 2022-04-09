export default function sectionTitle({ children, h1, h2, h3, p }) {
  return (
    <div className=" my-[18vh] w-[800px] max-w-[80vw] mx-auto">
      <div className=" flex flex-col text-center justify-center items-center  space-y-10 leading-tight">
        {/* title */}
        <div className=" text-[3rem] md:text-[4.5rem]">
          {h1 && <h1>{h1}</h1>}
          {h2 && <h2>{h2}</h2>}
          {h3 && <h3>{h3}</h3>}
        </div>
        {/* subtitle */}
        <div className="text-2xl md:text-3xl font-normal">
          {p && <p>{p}</p>}
        </div>
        {children}
      </div>
    </div>
  );
}
