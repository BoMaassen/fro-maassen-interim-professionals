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
                            {RemoveDuplicatedAndSort(assignments.map((assignment) => assignment.place)).map((place) =>(
                            <li key={place} onClick={() => setFilteredPlace(prevItems => [...prevItems, place])}>{place}</li>
                            ))}      
                        </ul>
                    </details>
                    <details>
                        <summary>Uren</summary>
                        <ul>
                            {RemoveDuplicatedAndSort(assignments.map((assignment) => assignment.hours)).map((hour) =>(
                            <li key={hour} onClick={() => setFilteredHours(prevItems => [...prevItems, hour])}>{hour}</li>
                            ))}  
                        </ul>
                    </details>
                    <details>
                        <summary>Opleidingsniveau</summary>
                        <ul>
                            {RemoveDuplicatedAndSort(assignments.map((assignment) => assignment.education)).map((education) =>(
                            <li key={education} onClick={() => setFilteredEducation(prevItems => [...prevItems, education])}>{education}</li>
                            ))}  
                        </ul>
                    </details>
                </div>
            </div>
            <div className='assignments-div'> {filteredAssignments.map((assignment => {
                return (
                    <Assignment key={assignment.id} title={assignment.title} place={assignment.place} hours={assignment.hours} salary={assignment.salary} education={assignment.education} buttoncolor={assignment.buttoncolor} text={assignment.text} />
                )
            }))}
            </div>
        </section>
    </main>
    )
}
export default Assignments;