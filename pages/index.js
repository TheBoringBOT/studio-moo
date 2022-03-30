import Head from "next/head";
import { SITE_NAME, SITE_DESCRIPTION_SHORT } from "../lib/constants";

// Layout components
import Container from "../components/layout/container";
import Intro from "../components/layout/intro";
import Layout from "../components/layout/layout";

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>
            {SITE_NAME} | {SITE_DESCRIPTION_SHORT}
          </title>
        </Head>
        <Container>
          <Intro />
        </Container>
      </Layout>
    </>
  );
}
