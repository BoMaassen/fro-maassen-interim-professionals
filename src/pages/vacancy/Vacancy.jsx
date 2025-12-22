import "./Vacancy.css"
import { useParams } from "react-router-dom";
import assignments from "../../../src/assignments.json"
import { MapPinIcon, ClockIcon, CoinsIcon, StudentIcon } from "@phosphor-icons/react";
import { useEffect } from "react";
import Paragraph from "../../components/paragraph/Paragraph";

function Vacancy({ setPageTitle }) {
    const { id } = useParams();
    const opdracht = assignments[id - 1];

    useEffect(() => {
        if (opdracht) setPageTitle(opdracht.title);
    }, [opdracht, setPageTitle]);

    if (!opdracht) return <p>Opdracht niet gevonden</p>;

    return <>
        <main className="vacancy">
            <section className="highlight-section">
                <div className="highlight-block">
                    <h3>{opdracht.title}</h3>
                    <div className="highlights">
                        <div className="highlight place">
                            <MapPinIcon size={20} color="var(--red-color)" />
                            <h4>{opdracht.place}</h4>
                        </div>
                        <div className="highlight hours">
                            <ClockIcon size={20} color="var(--blue-color)" />
                            <h4>{opdracht.hours} uur</h4>
                        </div>
                        <div className="highlight salary">
                            <CoinsIcon size={20} color="var(--black-color)" />
                            <h4>{opdracht.salary} per uur</h4>
                        </div>
                        <div className="highlight education">
                            <StudentIcon size={20} color="var(--purple-color)" />
                            <h4>{opdracht.education} niveau</h4>
                        </div>
                    </div>
                </div>
            </section>
            <section className="vacancy-section">
                <Paragraph title="Over het bedrijf" text={opdracht.overHetBedrijf} className="paragraph" color="purple" />
                <Paragraph title="Wat ga je doen?" text={opdracht.watGaJeDoen} className="paragraph" color="blue"  />
                <Paragraph title="Wat we verwachten" text={<ul> {opdracht.watWeVerwachten.map((verwachting, index) => (
                    <li key={index}>{verwachting}</li>
                ))}</ul>} className="paragraph" color="red"/>
                <Paragraph title="Wat we beiden" text={<ul>
                        {opdracht.watWeBieden.map((bieden, index) => (
                            <li key={index}>{bieden}</li>
                        ))}
                    </ul>} className="paragraph" color="black" />
            </section>
        </main>
    </>
}

export default Vacancy;