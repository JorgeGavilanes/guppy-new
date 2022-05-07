import { getAllProjectsIds, getProjectData } from "../../lib/proyectos";
import Head from 'next/head';
import Nav from "../../components/nav";
import Header from "../../components/proyecto/header";
import Contenido from "../../components/proyecto/contenido";
import Footer from "../../components/footer";

export default function Proyecto({ projectData }) {
    return (
        <>
            <Head>
                <title>Proyecto {projectData.titulo} - GuppyDigital</title>
            </Head>
            <Nav />
            <Header
                img={projectData.imagen}
                alt={projectData.alt}
                titulo={projectData.titulo}
                desc={projectData.descripcion}
                fecha={projectData.fecha}
                redes={projectData.icons}
            />
            <Contenido
                content={{ __html: projectData.contentHtml }}
                ruta = {`https://guppydigital.com/proyecto/${projectData.id}`}
            />
            <Footer />
        </>
    )
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllProjectsIds();

    return {
        paths,
        fallback : false
    }
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const projectData = await getProjectData(params.id);
    return {
        props : {
            projectData
        }
    }
}