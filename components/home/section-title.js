export default function sectionTitle({ children, h1, h2, h3, p }) {
  return (
    <div className=" mt-28 w-[800px] max-w-[90vw] mx-auto">
      <div className="flex flex-col items-center justify-center space-y-8 leading-none tracking-tight text-center pt-2">
        {/* title */}
        <div className="text-black title-normal">
          {h1 && (
            <h1 className="text-[3.6rem] md:text-[5.3rem] font-bold">{h1}</h1>
          )}
          {h2 && <h2 className="text-[2.1rem] md:text-[3.8rem]">{h2}</h2>}
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
