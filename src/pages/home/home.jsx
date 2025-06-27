import { BriefcaseIcon, HandshakeIcon, TargetIcon, MapPinIcon, ClockIcon, CoinsIcon, StudentIcon, CaretRightIcon } from "@phosphor-icons/react";
import "./Home.css"
import Usp from "../../components/ups/Usp";
import Button from "../../components/button/Button";
import Assignment from "../../components/assignment/Assignment";

function Home() {
    return (<main>
        <section className="introduction">
            <div className="intro-tekst">
                <h2>Intro tekst</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempora quibusdam laudantium! Possimus suscipit, rerum autem deserunt facere eum nobis ab ducimus ullam exercitationem vero, veritatis atque eius cumque doloribus delectus iste! Cum tenetur culpa, esse quia quibusdam dicta corrupti exercitationem eveniet et a aperiam labore hic quisquam ducimus nihil necessitatibus distinctio sint illum in aliquid! Atque est id, sed eligendi fugiat deleniti omnis enim doloribus velit, voluptate vero consectetur quas tempore incidunt laborum repellat alias eaque culpa labore quod. Odio maiores nihil recusandae possimus repudiandae blanditiis </p>
            </div>
            <div className="usps">
                <Usp icon={<TargetIcon size={26} />} title="Doelgericht" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt iste beatae est quam odio dolorum quasi, eveniet saepe nemo cumque voluptas, consequatur eligendi" classname="usp usp1" />
                <Usp icon={<HandshakeIcon size={26} />} title="Persoonlijk" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt iste beatae est quam odio dolorum quasi, eveniet saepe nemo cumque voluptas, consequatur eligendi" classname="usp usp2" />
                <Usp icon={<BriefcaseIcon size={26} />} title="Professioneel" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt iste beatae est quam odio dolorum quasi, eveniet saepe nemo cumque voluptas, consequatur eligendi" classname="usp usp3" />
            </div>
        </section>
        <section className="assignments">
            <h2>Interim opdrachten</h2>
            <div className="assignment-block">
                <Assignment title="Interim manager" place="Arnhem" hours="32-26" salary="75-90" education="Hbo" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quisquam rem, accusantium qui sunt illo blanditiis suscipit similique quo eveniet laboriosam incidunt?..."/>
                <Assignment title="Interim manager" place="Arnhem" hours="32-26" salary="75-90" education="Hbo" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quisquam rem, accusantium qui sunt illo blanditiis suscipit similique quo eveniet laboriosam incidunt?..."/>
                <Assignment title="Interim manager" place="Arnhem" hours="32-26" salary="75-90" education="Hbo" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quisquam rem, accusantium qui sunt illo blanditiis suscipit similique quo eveniet laboriosam incidunt?..."/>
            </div>
            <Button className="text-button" text="Bekijk alle opdrachen" />
        </section>
    </main>
    )
}
export default Home;