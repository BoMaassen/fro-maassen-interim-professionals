import './Assignments.css'
import Assignment from "../../components/assignment/Assignment";

function Assignments(){
    return( <main>
    <section className='assignments-section'>
        <div className='filter'>
            <div className='filtermenu'>
                <h2>Filter</h2>
                <h4>Plaats</h4>
                <ul>
                    <li>Arnhem</li>
                    <li>Nijmegen</li>
                    <li>Utrecht</li>
                </ul>
                <h4>Uren</h4>
                <h4>Opleidingsniveau</h4>
            </div>
        </div>
        <div className='assignments-div'>
        <Assignment title="Interim manager" place="Arnhem" hours="32-26" salary="75-90" education="Hbo" buttoncolor="blue" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quisquam rem, accusantium qui sunt illo blanditiis suscipit similique quo eveniet laboriosam incidunt?..."/>
        <Assignment title="Interim manager" place="Arnhem" hours="32-26" salary="75-90" education="Hbo" buttoncolor="black" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quisquam rem, accusantium qui sunt illo blanditiis suscipit similique quo eveniet laboriosam incidunt?..."/>
        <Assignment title="Interim manager" place="Arnhem" hours="32-26" salary="75-90" education="Hbo" buttoncolor="purple" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quisquam rem, accusantium qui sunt illo blanditiis suscipit similique quo eveniet laboriosam incidunt?..."/>
        <Assignment title="Interim manager" place="Arnhem" hours="32-26" salary="75-90" education="Hbo" buttoncolor="red" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quisquam rem, accusantium qui sunt illo blanditiis suscipit similique quo eveniet laboriosam incidunt?..."/>
        <Assignment title="Interim manager" place="Arnhem" hours="32-26" salary="75-90" education="Hbo" buttoncolor="blue" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quisquam rem, accusantium qui sunt illo blanditiis suscipit similique quo eveniet laboriosam incidunt?..."/>
        <Assignment title="Interim manager" place="Arnhem" hours="32-26" salary="75-90" education="Hbo" buttoncolor="black" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quisquam rem, accusantium qui sunt illo blanditiis suscipit similique quo eveniet laboriosam incidunt?..."/>
        <Assignment title="Interim manager" place="Arnhem" hours="32-26" salary="75-90" education="Hbo" buttoncolor="purple" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quisquam rem, accusantium qui sunt illo blanditiis suscipit similique quo eveniet laboriosam incidunt?..."/>
        <Assignment title="Interim manager" place="Arnhem" hours="32-26" salary="75-90" education="Hbo" buttoncolor="red" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quisquam rem, accusantium qui sunt illo blanditiis suscipit similique quo eveniet laboriosam incidunt?..."/>
        </div> 
    </section>
    </main>
    )
}
export default Assignments;