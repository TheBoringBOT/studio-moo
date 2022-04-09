import { CheckIcon } from "@heroicons/react/solid";
import SectionTitle from "../section-title";
import styles from "./hero.module.scss";

export default function hero() {
  return (
    <>
      <SectionTitle
        h1={"An entire team of  experts at your FINGERTIPS"}
        p={
          "Get unlimited  requests and revisions. No expensive hourly billing. Flat monthly rate. Pause anytime."
        }
      >
        {/* features */}
        <div className="flex-col space-y-4 md:space-y-0 align-center md:flex-row flex md:space-x-11 items-center">
          {features.map((feature, i) => (
            <div key={i}>
              <span className="bg-bg-primary text-white rounded-full py-2 px-3 flex items-center whitespace-nowrap ">
                <CheckIcon className="h-5 w-5 mr-2" /> {feature}
              </span>
            </div>
          ))}
        </div>
      </SectionTitle>

      <div className={styles.shape1}></div>
      <div className={styles.shape2}></div>
    </>
  );
}

const features = ["Simple Packages", "Design + Development", "No Contracts"];
