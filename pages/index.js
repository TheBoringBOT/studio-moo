import Head from "next/head";
import {
  SITE_NAME,
  SITE_DESCRIPTION_SHORT,
  SITE_DESCRIPTION,
} from "../lib/constants";

// Layout components
import Spacer from "../components/layout/spacer";
import Layout from "../components/layout/layout";

// import components
import Hero from "../components/home/hero/hero";
import About from "../components/home/about/about";
import CardGrid from "../components/home/card-grid/card-grid";
import Faq from "../components/home/faq/faq";
import ProjectCta from "../components/home/cta/project-cta";
import Footer from "../components/home/footer/footer";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>
          {SITE_NAME} | {SITE_DESCRIPTION_SHORT}
        </title>
        <meta name="description" content={SITE_DESCRIPTION} />
      </Head>

      <Hero />

      <About />
      <Spacer />
      <CardGrid />

      <ProjectCta />
      {/* <div className="bg-light-grey">
          <Faq />
        </div> */}
      <Footer />
    </Layout>
  );
}
