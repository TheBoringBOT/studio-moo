import SectionTitle from "../section-title";
import Spacer from "../../layout/spacer";
import FadeInText from "../../animation/fade-in-text";
export default function about() {
  return (
    <div>
      <Spacer />

      <SectionTitle
        widthRemove={true}
        h2={<>Sit viverra nullam quis. Ullamcorper lacus.</>}
        p={
          <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tempus
            morbi amet elementum sapien. Ac non lacinia vulputate est suscipit.
            Elit ipsum elit sit consectetur tristique viverra quam cursus
            egestas.
          </>
        }
      ></SectionTitle>
    </div>
  );
}
