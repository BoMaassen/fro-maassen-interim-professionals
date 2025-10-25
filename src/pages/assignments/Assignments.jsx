import './Assignments.css'
import Assignment from "../../components/assignment/Assignment";
import assignments from "../../../src/assignments.json"
import { useState } from 'react';
import RemoveDuplicatedAndSort from '../../helpers/RemoveDuplicatedAndSort';

function Assignments() {
    
    return (<main>
        <section className='assignments-section'>
            <div className='filter'>
                <div className='filtermenu'>
                    <h2>Filter</h2>
                    <details>
                        <summary>Plaats</summary>
                        <ul>
                            {RemoveDuplicatedAndSort(assignments.map((assignment) => assignment.place)).map((place) =>(
                            <li key={place}>{place}</li>
                            ))}      
                        </ul>
                    </details>
                    <details>
                        <summary>Uren</summary>
                        <ul>
                            {RemoveDuplicatedAndSort(assignments.map((assignment) => assignment.hours)).map((hour) =>(
                            <li key={hour}>{hour}</li>
                            ))}  
                        </ul>
                    </details>
                    <details>
                        <summary>Opleidingsniveau</summary>
                        <ul>
                            {RemoveDuplicatedAndSort(assignments.map((assignment) => assignment.education)).map((education) =>(
                            <li key={education}>{education}</li>
                            ))}  
                        </ul>
                    </details>
                </div>
            </div>
            <div className='assignments-div'> {assignments.map((assignment => {
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