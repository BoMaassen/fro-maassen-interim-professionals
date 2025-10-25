import './Assignments.css'
import Assignment from "../../components/assignment/Assignment";
import assignments from "../../../src/assignments.json"
import { useState } from 'react';

function Assignments() {
    const places = assignments.map((assignment) =>  assignment.place);
    const uniquePlaces = places.filter((place, id, array) => array.indexOf(place) == id);
    const sortedPlaces = uniquePlaces.sort((a, b) => a.localeCompare(b));
    console.log(sortedPlaces);

    return (<main>
        <section className='assignments-section'>
            <div className='filter'>
                <div className='filtermenu'>
                    <h2>Filter</h2>
                    <details>
                        <summary>Plaats</summary>
                        <ul>
                            {sortedPlaces.map((place) =>(
                            <li key={place}>{place}</li>
                            ))}      
                        </ul>
                    </details>
                    <details>
                        <summary>Uren</summary>
                        <ul>
                            
                        </ul>
                    </details>
                    <details>
                        <summary>Opleidingsniveau</summary>
                        <ul>
                            
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