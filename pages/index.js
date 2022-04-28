import Head from "next/head";
import { SITE_NAME, SITE_DESCRIPTION_SHORT } from "../lib/constants";

// Layout components
import Container from "../components/layout/container";
import Layout from "../components/layout/layout";

// import components
import Hero from "../components/home/hero/hero";
import Header from "../components/home/header";

// smooth scroll
import LocomotiveScroll from "../components/home/locomotive-scroll";

export default function Index() {
  return (
    // <LocomotiveScroll>
    <div className="grain">
      <Layout>
        <Head>
          <title>
            {SITE_NAME} | {SITE_DESCRIPTION_SHORT}
          </title>
        </Head>

        <Hero />
      </Layout>
    </div>
    // </LocomotiveScroll>
  );
}
