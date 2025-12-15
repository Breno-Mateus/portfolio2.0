import type { ReactNode } from "react";

type ServicesCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

function ServicesCard({ icon, title, description }: ServicesCardProps) {
  return (
    <div className="w-64 border border-TextSecondary rounded-xl py-7 px-6 flex flex-col justify-between gap-5">
      <div>{icon}</div> 
      <div>
        <p className="text-base font-bold">{title}</p>
        <p className="font-Small text-sm">{description}</p>
      </div>
    </div>
  );
}

export default ServicesCard;