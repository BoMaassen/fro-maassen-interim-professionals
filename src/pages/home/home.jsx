import { BriefcaseIcon, HandshakeIcon, TargetIcon } from "@phosphor-icons/react";
import "./Home.css"

function Home(){
    return( <main>
    <section className="introduction">
        <div className="intro-tekst">
            <h2>Intro tekst</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempora quibusdam laudantium! Possimus suscipit, rerum autem deserunt facere eum nobis ab ducimus ullam exercitationem vero, veritatis atque eius cumque doloribus delectus iste! Cum tenetur culpa, esse quia quibusdam dicta corrupti exercitationem eveniet et a aperiam labore hic quisquam ducimus nihil necessitatibus distinctio sint illum in aliquid! Atque est id, sed eligendi fugiat deleniti omnis enim doloribus velit, voluptate vero consectetur quas tempore incidunt laborum repellat alias eaque culpa labore quod. Odio maiores nihil recusandae possimus repudiandae blanditiis distinctio deserunt eum inventore ratione quo culpa dolor suscipit libero nulla perspiciatis, ad sapiente ea itaque nesciunt in? Asperiores eos voluptates nemo, odit repellat sit quas ab corrupti natus tempora nihil culpa incidunt doloribus corporis voluptas adipisci quisquam reiciendis quis harum rerum explicabo dignissimos iure? Et, laudantium distinctio! Aspernatur, sint iure provident deserunt quod nesciunt, sed enim suscipit ipsa aliquid facilis quis! Soluta.</p>
        </div>
        <div className="usps">
            <article className="usp">
                <div> 
                    <TargetIcon size={26}/>
                    <h3>Doelgericht</h3>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt iste beatae est quam odio dolorum quasi, eveniet saepe nemo cumque voluptas, consequatur eligendi facilis, voluptatum autem. Quidem eius incidunt at, dolores exercitationem veniam repellat architecto dignissimos amet reiciendis, aliquid reprehenderit dicta, eveniet error. Ratione voluptatum, consequatur aspernatur iure necessitatibus voluptas.</p>
            </article>
            <article className="usp">
                <div> 
                    <HandshakeIcon size={26}/>
                    <h3>Persoonlijk</h3>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt iste beatae est quam odio dolorum quasi, eveniet saepe nemo cumque voluptas, consequatur eligendi facilis, voluptatum autem. Quidem eius incidunt at, dolores exercitationem veniam repellat architecto dignissimos amet reiciendis, aliquid reprehenderit dicta, eveniet error. Ratione voluptatum, consequatur aspernatur iure necessitatibus voluptas.</p>
            </article>

            <article className="usp">
                <div> 
                    <BriefcaseIcon size={26}/>
                    <h3>Professioneel</h3>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt iste beatae est quam odio dolorum quasi, eveniet saepe nemo cumque voluptas, consequatur eligendi facilis, voluptatum autem. Quidem eius incidunt at, dolores exercitationem veniam repellat architecto dignissimos amet reiciendis, aliquid reprehenderit dicta, eveniet error. Ratione voluptatum, consequatur aspernatur iure necessitatibus voluptas.</p>
            </article>


        </div>

    </section>
    </main>
    )
}
export default Home;