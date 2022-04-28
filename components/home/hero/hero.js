import SectionTitle from "../section-title";
import Header from "./header";

export default function hero() {
  return (
    <div className="bg-mid-grey min-h-[600px] h-[82vh] ">
      <div className="flex flex-col items-center justify-center">
        <Header />
        <SectionTitle
          h1={
            <>
              <span className="text-white">
                Quam ut tellus blandit est et in.
              </span>
            </>
          }
          p={
            <>
              <span className="text-white">
                Odio blandit pretium scelerisque sit proin.
              </span>
            </>
          }
        >
          <div className="py-2 ">
            <button className="px-10 py-5 text-xl text-white transition-all rounded-full bg-black-2 hover:bg-black-2-hover">
              Contact Us
            </button>
          </div>
        </SectionTitle>

        {/* <div className={styles.shape1}></div>
      <div className={styles.shape2}></div> */}
      </div>
    </div>
  );
}
