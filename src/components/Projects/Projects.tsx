import ProjectCard from "../ProjectCard/ProjectCard";
import { projectsData } from "../../data/Projects";
import { type ProjectType } from "../../data/Projects";

function Projects() {
  return (
    <section className="pb-20 flex flex-col items-center gap-14">
        <div className="text-center px-4">
            <h2 className="font-subtitle text-IconGreen text-xl">Meu trabalho</h2>
            <p className="text-2xl font-bold">Veja os projetos em destaque</p>
        </div>

        <ul className="flex gap-4 justify-center flex-wrap list-none p-0">
            {projectsData.map((project : ProjectType) => (
                <li key={project.id}>
                    <ProjectCard 
                        image={project.image} 
                        title={project.title} 
                        description={project.description} 
                        url={project.url}
                    />
                </li>
            ))}
        </ul>
    </section>
  );
}

export default Projects;