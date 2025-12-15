import ServicesCard from "../SevicesCard/ServicesCard";
import { LuMonitorSmartphone } from "react-icons/lu";
import { FaDatabase } from "react-icons/fa";
import { CgInfinity } from "react-icons/cg";

function Services() {
  return (
    <section className="bg-[#0D0E11] py-20 flex flex-col items-center gap-14">
        <div className="text-center px-4">
          <h2 className="font-subtitle text-muted text-xl">Meus serviços</h2>
          <p className="text-2xl font-bold">Como posso ajudar o seu negócio</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 flex-wrap">
          <ServicesCard 
            icon={<LuMonitorSmartphone className="text-IconPurple h-10 w-10" />}
            title="Websites e Aplicativos"
            description="Desenvolvimento de interfaces"
          />

          <ServicesCard 
            icon={<FaDatabase className="text-IconYellow h-10 w-10" />}
            title="API e banco de dados"
            description="Criação de serviços do sistema "
          />

          <ServicesCard 
            icon={<CgInfinity className="text-IconGreen h-10 w-10" />}
            title="DevOps"
            description="Gestão e infraestrutura da aplicação"
          />
        </div>
    </section>
  );
}

export default Services;