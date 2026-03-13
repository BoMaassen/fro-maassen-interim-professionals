import './About.css'
import logoMip from "../../assets/LOGO_MIP.png";
import Usp from "../../components/ups/Usp";
import { BriefcaseIcon, HandshakeIcon, TargetIcon } from "@phosphor-icons/react";
import ContactSection from '../../components/contact/ContactSection';

function About() {
    return (<main>
        <section className="about-us">
            <span>
                <img src={logoMip} alt="Logo Maassen interim professionals" />
            </span>
            <div className='about-text'>
                <h2> Wie we zijn</h2>
                <p>Wij zijn een platform dat interim professionals en opdrachtgevers met elkaar verbindt. Wij geloven dat interim professionals een cruciale rol spelen bij verandering, continuïteit en verbetering binnen organisaties.</p>
            </div>
        </section>
        <section className="about-work">
            <div className='about-work-text'>
                <h2> Wat we doen</h2>
                <p>We brengen vraag en aanbod bij elkaar en maken het eenvoudig voor opdrachtgevers en interim professionals om elkaar snel te vinden. Ons platform biedt toegang tot actuele opdrachten en heldere informatie over inhoud, duur, tarief en verwachtingen.
                </p>
            </div>
            <div className="about-usps">
                <Usp icon={<TargetIcon size={26} />} title="Doelgericht" text="Wij werken doelgericht om de juiste match te maken tussen interim professional en organisatie. Zo komt elke zoektocht snel en efficiënt tot resultaat." classname="usp usp1" />
                <Usp icon={<HandshakeIcon size={26} />} title="Persoonlijk" text="Bij ons staat persoonlijk contact centraal. We luisteren, begrijpen jouw wensen en begeleiden zowel kandidaten als opdrachtgevers op maat." classname="usp usp2" />
                <Usp icon={<BriefcaseIcon size={26} />} title="Professioneel" text="Onze aanpak is professioneel en zorgvuldig, met oog voor kwaliteit en langdurige samenwerking. Zo zorgen we voor een match die echt werkt voor beide partijen." classname="usp usp3" /> </div>
        </section>
        <ContactSection/>
    </main>
    )
}
export default About;