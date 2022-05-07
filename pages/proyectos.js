import Head from 'next/head'
import Nav from "../components/nav";
import ExpectationsList from '../components/expectationslist';
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

export default function Proyectos({ allProjectsData }) {
  return (
    <>
      <Head>
        <title>Proyectos - GuppyDigital</title>
      </Head>
      <Nav />
      <ExpectationsList
        proyectos= {allProjectsData}
      />
      <Footer />
    </>
  );
}