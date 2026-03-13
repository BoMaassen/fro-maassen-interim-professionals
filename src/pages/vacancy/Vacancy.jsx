import "./Vacancy.css"
import '../contact/Contact.css'
import { useParams, Link, Navigate } from "react-router-dom";
import assignments from "../../../src/assignments.json"
import { MapPinIcon, ClockIcon, CoinsIcon, StudentIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import Paragraph from "../../components/paragraph/Paragraph";
import Formulier from "../../components/form/Formulier";
import InputFile from "../../components/inputFile/InputFile.JSX";
import { useForm } from 'react-hook-form';


function Vacancy({ setPageTitle }) {
     const { id } = useParams();
  const opdracht = assignments[id - 1];

  const { register, formState: { errors } } = useForm();
  const [fileName, setFileName] = useState("Upload een CV");

  useEffect(() => {
    if (opdracht) {
      setPageTitle(opdracht.title);
    }
  }, [opdracht, setPageTitle]);

  if (!opdracht) {
    return <Navigate to="*" replace />;
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
                <Paragraph title="Wat we bieden" text={<ul>
                    {opdracht.watWeBieden.map((bieden, index) => (
                        <li key={index}>{bieden}</li>
                    ))}
                </ul>} className="paragraph" color="black" />

                <Formulier title="Reageer">
                    <InputFile inputId="content" name="content" className="input-file" labelName={fileName} onChange={(e) => {
                        setFileName(e.target.files[0]?.name || "Upload een CV");
                    }}
                        validationRules={{
                            required: { value: true, message: "Je moet een CV uploaden" },
                        }} type="file"
                        register={register}
                        errors={errors}>
                    </InputFile>
                </Formulier>
            </section>
        </main>
    </>
}

export default Vacancy;