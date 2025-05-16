import { BriefcaseIcon, HandshakeIcon, TargetIcon } from "@phosphor-icons/react";
import "./Home.css"

function Home(){
    return( <main>
    <section className="introduction">
        <div className="intro-tekst">
            <h2>Intro tekst</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempora quibusdam laudantium! Possimus suscipit, rerum autem deserunt facere eum nobis ab ducimus ullam exercitationem vero, veritatis atque eius cumque doloribus delectus iste! Cum tenetur culpa, esse quia quibusdam dicta corrupti exercitationem eveniet et a aperiam labore hic quisquam ducimus nihil necessitatibus distinctio sint illum in aliquid! Atque est id, sed eligendi fugiat deleniti omnis enim doloribus velit, voluptate vero consectetur quas tempore incidunt laborum repellat alias eaque culpa labore quod. Odio maiores nihil recusandae possimus repudiandae blanditiis </p>
        </div>
        <div className="usps">
            <article className="usp usp1">
                <div> 
                    <TargetIcon size={26}/>
                    <h3>Doelgericht</h3>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt iste beatae est quam odio dolorum quasi, eveniet saepe nemo cumque voluptas, consequatur eligendi</p>
            </article>
            <article className="usp usp2">
                <div> 
                    <HandshakeIcon size={26}/>
                    <h3>Persoonlijk</h3>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt iste beatae est quam odio dolorum quasi, eveniet saepe nemo cumque voluptas, consequatur eligendi</p>
            </article>

            <article className="usp usp3">
                <div> 
                    <BriefcaseIcon size={26}/>
                    <h3>Professioneel</h3>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt iste beatae est quam odio dolorum quasi, eveniet saepe nemo cumque voluptas, consequatur eligendi </p>
            </article>
        </div>

    </section>
    </main>
    )
}
export default Home;