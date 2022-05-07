import global from "../styles/global.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/imagenes/Guppy.svg" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
                    crossorigin="anonymous"
                />
                <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                
                
                <meta charset="UTF-8" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="format-detection" content="email=no" />
                <meta name="format-detection" content="address=no" />
                
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <meta name="description" content="Tu mejor opción para impulsar tu emprendimiento. Desarrollamos y diseñamos aplicaciones, sitios web y marcas. Impulsamos tu marca brindandote las mejores tecnologías a medida para tu proyecto. En GuppyDigital nos encargamos del desarrollo de sitios y aplicaciones webs, imagen corporativa y softwares administrativos. GuppyDigital - Innovamos la web ☎Whatsapp: 0984795971" />
                <meta name="robots" content="index" />
                <meta name="googlebot" content="index, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="bingbot" content="index, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="keywords" content="sitios web, guppy, guppydigital, digital, paginas web, web, manta, portoviejo, guayaquil, quito, continues deployment, github, negocios, sitios web en html5, css3, javascript, js, paginas web de emprendedores, emprendimiento, posicionamiento web, posicionamiento en buscadores, pymes, dominios, precio de una pagina web, tienda online, landing page, single page, diseños publicitarios, diseños web, maquetacion web, animaciones, logotipo, logos, clientes corporativos, empresas personales, guppydigital.com, sitios web en portoviejo, paginas web en manta, tiena online guayaquil, tiena online quito, paginas web para emprendedores, agencia digital, negocios digitales ecuador, paginas web en ecuador, sitios web en ecuador, negocios locales, pagina para negocio, pagina para empresas, diseño web, maquetacion web, imagen corporativa, imagen empresarial, softwares, software, softwares administrativos, programas administrativos" />
                <meta name="DC.title" content="GuppyDigital" />
                <meta name="geo.region" content="EC-M" />
                <meta name="geo.placename" content="Portoviejo" />
                <meta name="geo.position" content="-1.053661;-80.449346" />
                <meta name="ICBM" content="-1.053661, -80.449346" />
                <meta name="author" content="Jorge Nain Gavilanes Huarz" />
                <meta name="copyright" content="© GuppyDigital.com 2018 - 2022 | Todos los derechos reservados" />

            </Head>
            <Component {...pageProps} />
        </>
    );
}