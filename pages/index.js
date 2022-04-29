import Head from "next/head";
import { SITE_NAME, SITE_DESCRIPTION_SHORT } from "../lib/constants";

// Layout components
import Container from "../components/layout/container";
import Layout from "../components/layout/layout";

// import components
import Hero from "../components/home/hero/hero";
import About from "../components/home/about/about";



export default function Index() {
  return (
    
    <div className="grain" data-scroll-speed="1">
      <Layout>
        <Head>
          <title>
            {SITE_NAME} | {SITE_DESCRIPTION_SHORT}
          </title>
        </Head>

        <Hero />
        <Container>
          <About />
        </Container>
      </Layout>
    </div>
    
  );
}
