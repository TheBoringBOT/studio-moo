import { useState } from "react";
import Head from "next/head";
import {
  SITE_NAME,
  SITE_DESCRIPTION_SHORT,
  SITE_DESCRIPTION,
} from "../lib/constants";

// Layout components
import Spacer from "../components/layout/spacer";
import Layout from "../components/layout/layout";

// import section components
import Hero from "../components/home/hero/hero";
import About from "../components/home/about/about";
import CardGrid from "../components/home/card-grid/card-grid";
import Faq from "../components/home/faq/faq";
import ProjectCta from "../components/home/cta/project-cta";
import Footer from "../components/home/footer/footer";

//modal component
import Modal from "../components/layout/modal";

//import forms
import ContactForm from "../components/form/contact-form";
import ProjectRequestForm from "../components/form/project-request";

export default function Index(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentForm, setCurrentForm] = useState(2);

  //form numbers
  // contact form = 1;
  // project request form = 2;

  return (
    <>
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

        <ProjectCta setModalOpen={setModalOpen} />
        {/* <div className="bg-light-grey">
          <Faq />
        </div> */}
        <Footer />
      </Layout>
      {modalOpen && (
        <Modal setModalOpen={setModalOpen}>
          {currentForm === 1 ? (
            <ContactForm setModalOpen={setModalOpen} />
          ) : (
            <ProjectRequestForm props={props} setModalOpen={setModalOpen} />
          )}
        </Modal>
      )}
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      public_key: process.env.EMAILJS_PUBLIC_KEY,
      private_key: process.env.EMAILJS_PRIVATE_KEY,
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
    },
  };
}
