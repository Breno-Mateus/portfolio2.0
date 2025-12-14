import Background from '../../assets/Background_Intro.png';
import Breno from '../../assets/breno.jpeg';
import CodeIcon from '../../assets/Code.png';
import TechCard from '../TechCard/TechCard';
import { ReactOriginalIcon, GithubOriginalIcon, Html5OriginalIcon, Css3OriginalIcon, JavascriptOriginalIcon, NodejsOriginalIcon, TypescriptOriginalIcon} from '@devicon/react';

function Intro() {
  return (
    <section
        style={{ backgroundImage: `url(${Background})`}} 
        className="bg-cover bg-center bg-no-repeat w-full px-40 pt-28 pb-44"
    >
        <div className="flex flex-col gap-20">
            <header className="flex flex-col items-center gap-14">
                <div className="relative w-fit">
                    <img 
                        src={Breno} 
                        alt="Foto de Breno Mateus" 
                        className="h-28 w-28 rounded-full border-2 border-muted p-1 object-cover"
                    />

                    <img 
                        src={CodeIcon} 
                        alt="Ícone de código" 
                        className="absolute bottom-0 right-0 h-10 w-10 translate-x-1 translate-y-1"
                    />
                </div>

                <div className="text-center flex flex-col gap-5 text-TextSecondary">
                    <p className="font-subtitle text-xl">Hello World! Meu nome é <span className="text-muted">Breno Mateus</span> e sou</p>
                    <h1 className="text-5xl font-bold text-white">Desenvolvedor Fullstack</h1>
                    <p className="font-Small text-sm">Transformo necessidades em aplicações reais, evolventes e funcionais. Desenvolvo sistemas através da <br/> minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.</p>
                </div>
            </header>

            <div className="flex gap-4 justify-center flex-wrap">
                <TechCard 
                    icon={<GithubOriginalIcon />} 
                    name="GitHub"
                />

                <TechCard 
                    icon={<Html5OriginalIcon />} 
                    name="HTML"
                />

                <TechCard 
                    icon={<Css3OriginalIcon />} 
                    name="CSS"
                />

                <TechCard 
                    icon={<JavascriptOriginalIcon />} 
                    name="JavaScript"
                />

                <TechCard 
                    icon={<TypescriptOriginalIcon />} 
                    name="TypeScript"
                />

                <TechCard 
                    icon={<ReactOriginalIcon />} 
                    name="React"
                />

                <TechCard 
                    icon={<NodejsOriginalIcon />} 
                    name="Node.js"
                />
            </div>
        </div>
    </section>
  );
}

export default Intro;