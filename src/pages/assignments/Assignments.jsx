import './Assignments.css'
import Assignment from "../../components/assignment/Assignment";
import assignments from "../../../src/assignments.json"

function Assignments() {
    return (<main>
        <section className='assignments-section'>
            <div className='filter'>
                <div className='filtermenu'>
                    <h2>Filter</h2>
                    <details>
                        <summary>Plaats</summary>
                        <ul>
                            <li>Arnhem</li>
                            <li>Nijmegen</li>
                            <li>Utrecht</li>
                        </ul>
                    </details>
                    <details>
                        <summary>Uren</summary>
                        <ul>
                            <li>24</li>
                            <li>36</li>
                            <li>40</li>
                        </ul>
                    </details>
                    <details>
                        <summary>Opleidingsniveau</summary>
                        <ul>
                            <li>Hbo</li>
                            <li>Wo</li>
                            <li>Mbo</li>
                        </ul>
                    </details>
                </div>
            </div>
            <div className='assignments-div'> {assignments.map((assignment => {
                return (
                    <Assignment title={assignment.title} place={assignment.place} hours={assignment.hours} salary={assignment.salary} education={assignment.education} buttoncolor={assignment.buttoncolor} text={assignment.text} />
                )
            }))}
            </div>
        </section>
    </main>
    )
}
export default Assignments;