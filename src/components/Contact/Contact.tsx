import SocialMediaCard from "../SocialMediaCard/SocialMediaCard";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Background from '../../assets/Background_Contacts.png';

function Contact() {
  return (
    <section
        style={{ backgroundImage: `url(${Background})`}} 
        className="bg-BackgroundPrimary py-20 flex flex-col items-center gap-14 bg-cover bg-center bg-no-repeat"
    >
        <div className="text-center px-4">
            <h2 className="text-IconPurple font-subtitle text-xl">Contato</h2>
            <p className="text-2xl font-bold">Gostou do meu trabalho?</p>
            <p className="font-Small text-base text-TextSecondary">Entre em contato ou acompanhe as minhas redes sociais!</p>
        </div>

        <ul className="flex flex-col gap-4">
            <li>
                <SocialMediaCard 
                    icon={<FaLinkedin />}
                    title="LinkedIn"
                    url="https://www.linkedin.com/in/breno-mateus/"
                />
            </li>

            <li>
                <SocialMediaCard 
                    icon={<FaGithub />}
                    title="GitHub"
                    url="https://github.com/Breno-Mateus"
                />
            </li>

            <li>
                <SocialMediaCard 
                    icon={<AiOutlineMail />}
                    title="Email"
                    url="mailto:brenomateus36@gmail.com"
                />
            </li>
        </ul>
    </section>
  );
}

export default Contact;