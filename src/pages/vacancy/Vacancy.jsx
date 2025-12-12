import { useParams } from "react-router-dom";
import assignments from "../../../src/assignments.json"
import { MapPinIcon, ClockIcon, CoinsIcon, StudentIcon, CaretRightIcon } from "@phosphor-icons/react";

function Vacancy() {
    const { id } = useParams();
    const opdracht = assignments[id - 1];
    console.log(opdracht)

    return <>
        <main>
            <section>
                <div>
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
            <section>
                <div>
                    <h3>Over het bedrijf</h3>
                    <p>{opdracht.overHetBedrijf}</p>
                </div>
                <div>
                    <h3>Wat ga je doen?</h3>
                    <p>{opdracht.watGaJeDoen}</p>
                </div>
                <div>
                    <h3>Wat we vereachten</h3>
                    <ul>
                        {opdracht.watWeVerwachten.map((verwachting, index) => (
                            <li key={index}>{verwachting}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>Wat we bieden</h3>
                    <ul>
                        {opdracht.watWeBieden.map((bieden, index) => (
                            <li key={index}>{bieden}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    </>
}

export default Vacancy;