import Head from "next/head";
import { SITE_NAME, SITE_DESCRIPTION_SHORT } from "../lib/constants";

// Layout components
import Container from "../components/layout/container";
import Layout from "../components/layout/layout";

// import components
import Hero from "../components/home/hero/hero";
import Header from "../components/home/header";
import About from "../components/home/about/about";
import OurProcess from "../components/home/our-process/our-process";
import Work from "../components/home/work/work";

export default function Index() {
  return (
    <div className="grain">
      <Layout>
        <Head>
          <title>
            {SITE_NAME} | {SITE_DESCRIPTION_SHORT}
          </title>
        </Head>
        <Header />

        <Hero />
        {/* <About />
        <OurProcess />
        <Work /> */}
        <Container></Container>
      </Layout>
    </div>
  );
}
