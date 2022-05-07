import Head from 'next/head'
import Nav from "../components/nav";
import HeaderServices from '../components/headerservices';
import Brands from "../components/brands";
import CtaFaq from '../components/ctafaq';
import Footer from "../components/footer";

export default function Servicios() {
  return (
    <>
      <Head>
        <title>Servicios - GuppyDigital</title>
      </Head>
      <Nav />
      <HeaderServices />
      <Brands />
      <CtaFaq />
      <Footer />
    </>
  );
}
