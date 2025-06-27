import "./Assignment.css"
import Button from "../button/Button";
import {MapPinIcon, ClockIcon, CoinsIcon, StudentIcon, CaretRightIcon } from "@phosphor-icons/react";

function Assignment({place, hours, salary, education, text, title}){
    return(
        <article className="assignment">
                    <h3>{title}</h3>
                    <div className="highlights">
                        <div className="highlight place">
                            <MapPinIcon size={20} color="var(--red-color)" />
                            <h4>{place}</h4>
                        </div>
                        <div className="highlight hours">
                            <ClockIcon size={20} color="var(--blue-color)" />
                            <h4>{hours} uur</h4>
                        </div>
                        <div className="highlight salary">
                            <CoinsIcon size={20} color="var(--black-color)" />
                            <h4>{salary} per uur</h4>
                        </div>
                        <div className="highlight education">
                            <StudentIcon size={20} color="var(--purple-color)" />
                            <h4>{education} niveau</h4>
                        </div>
                    </div>
                    <p>{text}</p>
                    <Button className="icon-button" text={<CaretRightIcon size={15} color="var(--white-color)" weight="bold" />} />
                </article>
    );
}

export default Assignment;