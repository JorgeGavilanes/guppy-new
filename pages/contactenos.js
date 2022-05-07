import Head from 'next/head'
import Nav from "../components/nav";
import Footer from "../components/footer";
import { Widget } from '@typeform/embed-react'

export default function Contactenos() {
  return (
    <>
      <Head>
        <title>Contáctenos - GuppyDigital</title>
      </Head>
      <Nav />
      <Widget id="yyveekLB" style={{ width: '100%',height:"100vh" }} className="my-form" />
      <Footer />
    </>
  );
}