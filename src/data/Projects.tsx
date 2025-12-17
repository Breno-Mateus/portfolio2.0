// Importe as imagens
import Project1Img from '../assets/project1.jpeg';
import Project2Img from '../assets/project2.png';

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
];