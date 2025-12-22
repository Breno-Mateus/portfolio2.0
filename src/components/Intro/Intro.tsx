import Background from '../../assets/Background_Intro.png';
import Breno from '../../assets/breno.jpeg';
import CodeIcon from '../../assets/Code.png';
import TechCard from '../TechCard/TechCard';
import { ReactOriginalIcon, GithubOriginalIcon, Html5OriginalIcon, Css3OriginalIcon, JavascriptOriginalIcon, NodejsOriginalIcon, TypescriptOriginalIcon, PythonOriginalIcon} from '@devicon/react';

function Intro() {
  return (
    <section
        style={{ backgroundImage: `url(${Background})`}} 
        className="bg-cover bg-center bg-no-repeat w-full py-16 px-4 md:pt-28 md:pb-44"
    >
        <div className="container mx-auto max-w-5xl flex flex-col gap-12 md:gap-20">
            <header className="flex flex-col items-center gap-8 md:gap-14">
                <div className="relative w-fit">
                    <img 
                        src={Breno} 
                        alt="Foto de Breno Mateus"
                        className="h-28 w-28 rounded-full border-2 border-muted p-1 object-cover"
                    />

                    <img 
                        src={CodeIcon} 
                        alt="" 
                        aria-hidden="true"
                        className="absolute bottom-0 right-0 h-10 w-10 translate-x-1 translate-y-1"
                    />
                </div>

                <div className="text-center flex flex-col gap-4 md:gap-5 text-TextSecondary items-center">
                    <p className="font-subtitle text-lg md:text-xl">
                        Hello World! Meu nome é <span className="text-muted">Breno Mateus</span> e sou
                    </p>
                    <h1 className="text-3xl md:text-5xl font-bold text-white">
                        Desenvolvedor Fullstack
                    </h1>
                    <p className="font-Small text-sm md:text-base max-w-md md:max-w-2xl leading-relaxed">
                        Transformo necessidades em aplicações reais, evolventes e funcionais. Desenvolvo sistemas através da minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.
                    </p>
                </div>
            </header>

            <ul className="flex gap-4 justify-center flex-wrap list-none p-0">
                <li><TechCard icon={<GithubOriginalIcon />} name="GitHub"/></li>
                <li><TechCard icon={<Html5OriginalIcon />} name="HTML"/></li>
                <li><TechCard icon={<Css3OriginalIcon />} name="CSS"/></li>
                <li><TechCard icon={<JavascriptOriginalIcon />} name="JavaScript"/></li>
                <li><TechCard icon={<TypescriptOriginalIcon />} name="TypeScript"/></li>
                <li><TechCard icon={<ReactOriginalIcon />} name="React"/></li>
                <li><TechCard icon={<NodejsOriginalIcon />} name="Node.js"/></li>
                <li><TechCard icon={<PythonOriginalIcon />} name="Python"/></li>
            </ul>
        </div>
    </section>
  );
}

export default Intro;