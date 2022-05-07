import Head from 'next/head';
import Nav from "../components/nav";
import Header from '../components/header';
import Expectations from '../components/expectations';
import Brands from '../components/brands';
import Services from '../components/services';
import CtaFaq from '../components/ctafaq';
import Footer from "../components/footer";
import { getSortedProjectsData } from "../lib/proyectos";

export async function getStaticProps() {
    const allProjectsData = getSortedProjectsData()
    return {
        props: {
            allProjectsData
        }
    }
}

export default function Inicio({ allProjectsData }) {
  return (
    <>
      <Head>
        <title>GuppyDigital</title>
      </Head>
      <Nav />
      <Header />
      <Expectations proyectos={ allProjectsData } />
      <Brands />
      <Services 
        buttonShow={true}
      />
      <CtaFaq />
      <Footer />
    </>
  );
}
