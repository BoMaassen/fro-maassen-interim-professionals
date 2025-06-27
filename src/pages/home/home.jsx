import { BriefcaseIcon, HandshakeIcon, TargetIcon } from "@phosphor-icons/react";
import "./Home.css"
import Usp from "../../components/ups/Usp";

function Home(){
    return( <main>
    <section className="introduction">
        <div className="intro-tekst">
            <h2>Intro tekst</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempora quibusdam laudantium! Possimus suscipit, rerum autem deserunt facere eum nobis ab ducimus ullam exercitationem vero, veritatis atque eius cumque doloribus delectus iste! Cum tenetur culpa, esse quia quibusdam dicta corrupti exercitationem eveniet et a aperiam labore hic quisquam ducimus nihil necessitatibus distinctio sint illum in aliquid! Atque est id, sed eligendi fugiat deleniti omnis enim doloribus velit, voluptate vero consectetur quas tempore incidunt laborum repellat alias eaque culpa labore quod. Odio maiores nihil recusandae possimus repudiandae blanditiis </p>
        </div>
        <div className="usps">
            <Usp icon={<TargetIcon size={26}/>} title="Doelgericht" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt iste beatae est quam odio dolorum quasi, eveniet saepe nemo cumque voluptas, consequatur eligendi" classname="usp usp1"/>
            <Usp icon={<HandshakeIcon size={26}/>} title="Persoonlijk" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt iste beatae est quam odio dolorum quasi, eveniet saepe nemo cumque voluptas, consequatur eligendi" classname="usp usp2"/>
            <Usp icon={<BriefcaseIcon size={26}/>} title="Professioneel" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt iste beatae est quam odio dolorum quasi, eveniet saepe nemo cumque voluptas, consequatur eligendi" classname="usp usp3"/>
        </div>

    </section>
    </main>
    )
}
export default Home;