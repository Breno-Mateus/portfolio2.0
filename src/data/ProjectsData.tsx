// Importe as imagens
import Project1Img from '../assets/project1.jpeg';
import Project2Img from '../assets/project2.png';
import Project3Img from '../assets/Projects3.png';
import Project4Img from '../assets/Projects4.png';
import Project5Img from '../assets/Projects5.png';
import Project6Img from '../assets/Project6.png';

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
}

export const projectsData: ProjectType[] = [
  {
    id: 1,
    title: "Portfólio Colaborativo",
    description: "Portfólio colaborativo do projeto voluntário Frontend Fusion.",
    image: Project1Img,
    url: "https://github.com/Projeto-FrontEnd-Fusion/vingadores-portfolio-colaborativo",
  },
  {
    id: 2,
    title: "Ecommerce-Tech",
    description: "Um e-commerce moderno e funcional, voltado para a venda de produtos tecnológicos.",
    image: Project2Img,
    url: "https://ecommerce-tech-beige.vercel.app/"
  },
  {
    id: 3,
    title: "Tatto Shop",
    description: "Página comercial de um tatuador.",
    image: Project3Img,
    url: "https://tattoo-shop-six.vercel.app/"
  },
  {
    id: 4,
    title: " Podcast Manager",
    description: "Permite centralizar diferentes episódios de podcasts separados por categoria.",
    image: Project4Img,
    url: "https://github.com/Breno-Mateus/node-ts-webapi-without-frameworks-podcast-menager"
  },
  {
    id: 5,
    title: "Disk-Denuncia",
    description: "Um aplicativo simples de denúncia online.",
    image: Project5Img,
    url: "https://disk-denuncia.vercel.app/"
  },
  {
    id: 6,
    title: "Tropa Digital",
    description: "Painel administrativo responsivo, focado em gerenciamento de eventos e usuários.",
    image: Project6Img,
    url: "https://tropa-digital-tau.vercel.app/"
  }
];