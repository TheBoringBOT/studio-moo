import SectionTitle from "../section-title";
export default function projectCta() {
  return (
    <section className="mt-[-100vh] bg-white relative text-center overflow-visible">
      <div className="h-[230vh] relative">
        <div className="absolute bg-red-300 w-full-h-10 top-50"></div>
        <div className="sticky top-0 h-screen">
          <div className="flex items-center justify-center h-full">
            <SectionTitle
              h2={
                <>
                  Commodo auctor
                  <br /> pretium lorem.
                </>
              }
              p={
                <>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ultricies morbi quis auctor.
                </>
              }
            >
              <div className="z-10 py-2">
                <button className="px-8 py-4 text-lg text-white transition-all bg-black rounded-full cursor-pointer white text- hover:bg-light-grey">
                  Get Started
                </button>
              </div>
            </SectionTitle>
          </div>
        </div>
      </div>
    </section>
  );
}
