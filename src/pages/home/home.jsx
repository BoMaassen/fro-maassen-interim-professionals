import { BriefcaseIcon, HandshakeIcon, TargetIcon, MapPinIcon, ClockIcon, CoinsIcon, StudentIcon, CaretRightIcon } from "@phosphor-icons/react";
import "./Home.css"
import Usp from "../../components/ups/Usp";
import Button from "../../components/button/Button";
import Assignment from "../../components/assignment/Assignment";
import assingments from "../../../src/assignments.json"
import ContactSection from '../../components/contact/ContactSection';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (<main>
        <section className="introduction">
            <div className="intro-tekst">
                <h2>Opdrachten die <br/>bij jou passen</h2>
                <p>Voor starters, ervaren professionals en interimmanagers bieden wij uitdagende opdrachten binnen de overheid en publieke sector. Zowel in loondienst als op zzp-basis. Ontdek nieuwe mogelijkheden en bekijk direct de actuele opdrachten.</p>
            </div>
            <div className="usps">
                <Usp icon={<TargetIcon size={26} />} title="Doelgericht" text="Wij werken doelgericht om de juiste match te maken tussen interim professional en organisatie. Zo komt elke zoektocht snel en efficiënt tot resultaat." classname="usp usp1" />
                <Usp icon={<HandshakeIcon size={26} />} title="Persoonlijk" text="Bij ons staat persoonlijk contact centraal. We luisteren, begrijpen jouw wensen en begeleiden zowel kandidaten als opdrachtgevers op maat." classname="usp usp2" />
                <Usp icon={<BriefcaseIcon size={26} />} title="Professioneel" text="Onze aanpak is professioneel en zorgvuldig, met oog voor kwaliteit en langdurige samenwerking. Zo zorgen we voor een match die echt werkt voor beide partijen." classname="usp usp3" />
            </div>
        </section>
        <section className="assignments">
            <h2>Interim opdrachten</h2>
            <div className="assignment-block">
                {assingments
                    .filter((assignment) => assignment.highlight === true)
                    .map((assignment) => (
                        <Assignment
                            key={assignment.id}
                            id={assignment.id}
                            title={assignment.title}
                            place={assignment.place}
                            hours={assignment.hours}
                            salary={assignment.salary}
                            education={assignment.education}
                            buttoncolor={assignment.buttoncolor}
                            text={assignment.text}
                        />
                    ))}
            </div>
            <Button className="text-button purple" text="Bekijk alle opdrachen" type="button" onClick={() => navigate(`/opdrachten`)} />
        </section>
        <ContactSection/>
    </main>
    )
}
export default Home;