import Head from 'next/head'
import Nav from "../components/nav";
import HeaderGuppy from '../components/headerguppy';
import Expectations from '../components/expectations';
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

export default function Guppy({ allProjectsData }) {
  return (
    <>
      <Head>
        <title>Guppy - GuppyDigital</title>
      </Head>
      <Nav />
      <HeaderGuppy />
      <Expectations proyectos={ allProjectsData } />
      <Footer />
    </>
  );
}