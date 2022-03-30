import Head from "next/head";
import { SITE_NAME, SITE_DESCRIPTION_SHORT } from "../lib/constants";

// Layout components
import Container from "../components/layout/container";
import Layout from "../components/layout/layout";
import HeroText from "../components/home/hero/hero-text";

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>
            {SITE_NAME} | {SITE_DESCRIPTION_SHORT}
          </title>
        </Head>
        <HeroText />
        <Container></Container>
      </Layout>
    </>
  );
}
