import Head from "next/head";
import { SITE_NAME, SITE_DESCRIPTION_SHORT } from "../lib/constants";

// Layout components
import Container from "../components/layout/container";
import Layout from "../components/layout/layout";

// import components
import Hero from "../components/home/hero/hero";
import About from "../components/home/about/about";
import CardGrid from "../components/home/card-grid/card-grid";
import Faq from "../components/home/faq/faq";
import Footer from "../components/home/footer/footer";

export default function Index() {
  return (
    <div className="overflow-hidden bg-white">
      <Layout>
        <Head>
          <title>
            {SITE_NAME} | {SITE_DESCRIPTION_SHORT}
          </title>
        </Head>

        <Hero />
        <Container>
          <About />
          <CardGrid />
        </Container>
        {/* <div className="bg-light-grey">
          <Faq />
        </div> */}
        <Footer />
      </Layout>
    </div>
  );
}
