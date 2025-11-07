import './Assignments.css'
import Assignment from "../../components/assignment/Assignment";
import assignments from "../../../src/assignments.json"
import { useState } from 'react';
import RemoveDuplicatedAndSort from '../../helpers/RemoveDuplicatedAndSort';
import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react";

function Assignments() {
    const [filteredPlace, setFilteredPlace] = useState([]);
    const [filteredHours, setFilteredHours] = useState([]);
    const [filteredEducation, setFilteredEducation] = useState([]);

    const filteredAssignments = assignments.filter((assignment) => {
        const matchPlace =
            filteredPlace.length === 0 || filteredPlace.includes(assignment.place);

        const matchHours =
            filteredHours.length === 0 || filteredHours.includes(assignment.hours);

        const matchEducation =
            filteredEducation.length === 0 || filteredEducation.includes(assignment.education);

        return matchPlace && matchHours && matchEducation;
    });


    return (<main>
        <section className='assignments-section'>
            <div className='filter'>
                <div className='filtermenu'>
                    <h2>Filter</h2>
                    <details>
                        <summary>Plaats</summary>
                        <ul>
                            {RemoveDuplicatedAndSort(
                                assignments
                                    /*.filter(
                                        (assignment) =>
                                          filteredPlace.includes(assignment.place) || 
                                          (
                                            (filteredHours.length === 0 || filteredHours.includes(assignment.hours)) &&
                                            (filteredEducation.length === 0 || filteredEducation.includes(assignment.education))
                                          )
                                      )*/
                                    .map((assignment) => assignment.place)
                            ).map((place) => {
                                const isSelected = filteredPlace.includes(place);
                                const count = assignments.filter(
                                    (a) =>
                                        a.place === place &&
                                        (filteredHours.length === 0 || filteredHours.includes(a.hours)) &&
                                        (filteredEducation.length === 0 || filteredEducation.includes(a.education))
                                ).length;

                                return (
                                    <li
                                        key={place}
                                        onClick={() =>
                                            setFilteredPlace((prevItems) =>
                                                prevItems.includes(place)
                                                    ? prevItems.filter((p) => p !== place)
                                                    : [...prevItems, place]
                                            )
                                        }
                                        className={isSelected ? 'filter-item selected' : 'filter-item'}
                                    >
                                        {place} <span style={{ opacity: 0.6 }}>({count})</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </details>
                    <details>
                        <summary>Uren</summary>
                        <ul>
                            {RemoveDuplicatedAndSort(
                                assignments
                                    /*.filter(
                                        (assignment) =>
                                          filteredHours.includes(assignment.hours) ||
                                          (
                                            (filteredPlace.length === 0 || filteredPlace.includes(assignment.place)) &&
                                            (filteredEducation.length === 0 || filteredEducation.includes(assignment.education))
                                          )
                                      )*/
                                    .map((assignment) => assignment.hours)
                            ).map((hour) => {
                                const isSelected = filteredHours.includes(hour);

                                const count = assignments.filter(
                                    (a) =>
                                        a.hours === hour &&
                                        (filteredPlace.length === 0 || filteredPlace.includes(a.place)) &&
                                        (filteredEducation.length === 0 || filteredEducation.includes(a.education))
                                ).length;

                                return (
                                    <li
                                        key={hour}
                                        onClick={() =>
                                            setFilteredHours((prevItems) =>
                                                prevItems.includes(hour)
                                                    ? prevItems.filter((h) => h !== hour)
                                                    : [...prevItems, hour]
                                            )
                                        }
                                        className={isSelected ? 'filter-item selected' : 'filter-item'}
                                    >
                                        {hour} <span style={{ opacity: 0.6 }}>({count})</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </details>
                    <details>
                        <summary>Opleidingsniveau</summary>
                        <ul>
                            {RemoveDuplicatedAndSort(
                                assignments
                                    /*.filter(
                                        (assignment) =>
                                          filteredEducation.includes(assignment.education) ||
                                          (
                                            (filteredPlace.length === 0 || filteredPlace.includes(assignment.place)) &&
                                            (filteredHours.length === 0 || filteredHours.includes(assignment.hours))
                                          )
                                      )*/
                                    .map((assignment) => assignment.education)
                            ).map((education) => {
                                const isSelected = filteredEducation.includes(education);

                                const count = assignments.filter(
                                    (a) =>
                                        a.education === education &&
                                        (filteredHours.length === 0 || filteredHours.includes(a.hours)) &&
                                        (filteredEducation.length === 0 || filteredEducation.includes(a.education))
                                ).length;

                                return (
                                    <li
                                        key={education}
                                        onClick={() =>
                                            setFilteredEducation((prevItems) =>
                                                prevItems.includes(education)
                                                    ? prevItems.filter((e) => e !== education)
                                                    : [...prevItems, education]
                                            )
                                        }
                                        className={isSelected ? 'filter-item selected' : 'filter-item'}
                                    >
                                        {education} <span style={{ opacity: 0.6 }}>({count})</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </details>
                </div>
            </div>
            <div className='assignments-div'>
                {filteredAssignments.length === 0 ? (
                    <h3>Er zijn geen opdrachten gevonden voor deze selectie.</h3>
                ) : (
                    filteredAssignments.map((assignment) => (
                        <Assignment
                            key={assignment.id}
                            title={assignment.title}
                            place={assignment.place}
                            hours={assignment.hours}
                            salary={assignment.salary}
                            education={assignment.education}
                            buttoncolor={assignment.buttoncolor}
                            text={assignment.text}
                        />
                    ))
                )}
            </div>
        </section>
    </main>
    )
}
export default Assignments;