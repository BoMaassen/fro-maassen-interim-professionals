import "./Vacancy.css"
import '../contact/Contact.css'
import { useParams } from "react-router-dom";
import assignments from "../../../src/assignments.json"
import { MapPinIcon, ClockIcon, CoinsIcon, StudentIcon } from "@phosphor-icons/react";
import { useEffect } from "react";
import Paragraph from "../../components/paragraph/Paragraph";
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef } from 'react';
import Input from '../../components/input/input';
import Button from '../../components/button/Button';

function Vacancy({ setPageTitle }) {
    const { id } = useParams();
    const opdracht = assignments[id - 1];
    const { register, handleSubmit, formState: { errors } } = useForm();
    const recaptchaRef = useRef();

    useEffect(() => {
        if (opdracht) setPageTitle(opdracht.title);
    }, [opdracht, setPageTitle]);

    if (!opdracht) return <p>Opdracht niet gevonden</p>;

    function handleFormSubmit(data) {
        recaptchaRef.current.execute();
        console.log(data);
    }

    function onReCAPTCHAChange(token) {
        if (!token) return; // gebruiker heeft reCAPTCHA niet voltooid
        // Hier kun je nu echt de data versturen
        console.log("Formulier verzonden met token:", token);
    }

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
                <Paragraph title="Wat ga je doen?" text={opdracht.watGaJeDoen} className="paragraph" color="blue" />
                <Paragraph title="Wat we verwachten" text={<ul> {opdracht.watWeVerwachten.map((verwachting, index) => (
                    <li key={index}>{verwachting}</li>
                ))}</ul>} className="paragraph" color="red" />
                <Paragraph title="Wat we beiden" text={<ul>
                    {opdracht.watWeBieden.map((bieden, index) => (
                        <li key={index}>{bieden}</li>
                    ))}
                </ul>} className="paragraph" color="black" />

                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <h2>Reageer</h2>
                    <div className='name-form'>
                        <Input inputType="text" inputName="firstname" placeholder="Voornaam" register={register} error={errors}
                            validationRules={{
                                required: {
                                    value: true,
                                    message: "Voornaam is verplicht",
                                }
                            }} />
                        <Input inputType="text" inputName="lastname" placeholder="Achternaam" register={register} error={errors}
                            validationRules={{
                                required: {
                                    value: true,
                                    message: "Achternaam is verplicht",
                                }
                            }} />
                    </div>
                    <div className='contacts-form'>
                        <Input inputType="text" inputName="email" placeholder="Email" register={register} error={errors}
                            validationRules={{
                                required: {
                                    value: true,
                                    message: "Email is verplicht",
                                }
                            }} />
                        <Input inputType="text" inputName="tel" placeholder="Telefoonnummer" register={register} error={errors}
                            validationRules={{
                                required: {
                                    value: true,
                                    message: "Telefoonnummer is verplicht",
                                }
                            }} />
                    </div>
                    <label htmlFor='message'>
                        <textarea id='message' placeholder='Bericht' {...register("message")} />
                    </label>
                    <ReCAPTCHA ref={recaptchaRef} size="invisible" onChange={onReCAPTCHAChange}
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // test key
                    />
                    <Button className="text-button purple" text="versturen" type="submit" />
                </form>
            </section>
        </main>
    </>
}

export default Vacancy;