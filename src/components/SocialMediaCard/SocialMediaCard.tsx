import type { ReactNode } from "react";
import { MdArrowOutward } from "react-icons/md";


type SocialMediaCardProps = {
    icon: ReactNode;
    title: string;
    url: string;
};

function SocialMediaCard({ icon, title, url }: SocialMediaCardProps) {
  return (
    <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-cardBackground flex justify-between items-center p-5 w-64 lg:w-96 rounded-xl group border border-transparent hover:border-IconBlue/50 transition-all duration-300 cursor-pointer"
    >
        <div className="flex items-center gap-3">
            <div className="group-hover:text-IconBlue transition-colors">{icon}</div>
            <p className="font-Small text-base font-medium group-hover:text-IconBlue transition-colors">{title}</p>
        </div>

        <MdArrowOutward  className="text-IconBlue text-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"/>
    </a>
  )
}

export default SocialMediaCard;