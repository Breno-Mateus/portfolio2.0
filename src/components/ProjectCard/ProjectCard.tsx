type ProjectCardProps = {
    image: string;
    title: string;
    description: string;
    url: string;
};


function ProjectCard({ image, title, description, url }: ProjectCardProps) {
  return (
    <a
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-72 h-64 bg-cardBackground rounded-xl p-3 flex flex-col  gap-5 group border border-transparent hover:border-IconGreen/50 transition-all duration-300 cursor-pointer"
    >
        <img  
            src={image}
            className="h-32 rounded-xl" 
        />

        <div>
            <p className="font-primary text-base font-bold">{title}</p>
            <p className="font-Small text-sm">{description}</p>
        </div>
    </a>
  );
} 

export default ProjectCard;