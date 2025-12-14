import type { ReactNode } from "react";

type TechCardProps = {
  icon: ReactNode;
  name: string;
};


function TechCard({ icon, name }: TechCardProps) {
  return (
    <div className="bg-cardBackground flex gap-2 rounded-3xl py-2 px-4 font-Small text-TextPrimary text-base items-center">
      <div>
        {icon}
      </div>

      <p>{name}</p>
    </div>
  );
}

export default TechCard;