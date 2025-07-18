import './About.css'
import logoMip from "../../assets/LOGO_MIP.png";
import Usp from "../../components/ups/Usp";
import { BriefcaseIcon, HandshakeIcon, TargetIcon} from "@phosphor-icons/react";

function About(){
    return( <main>
<section className="about-us">
    <span>
<img src={logoMip} alt="Logo Maassen interim professionals"/>
    </span>
    <div className='about-text'>
<h2> Wie we zijn</h2>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus eum id pariatur facere, nulla quidem nihil fugit magni officia quisquam vero nam, cum dolor earum. Numquam praesentium hic a est, impedit totam in, recusandae, voluptatem pariatur soluta ad dolor voluptate eaque debitis porro odit vero. Doloremque repudiandae blanditiis odit eligendi!
</p>
    </div>
</section>
<section className="about-work">
    <div className='about-work-text'>
<h2> Wat we doen</h2>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus eum id pariatur facere, nulla quidem nihil fugit magni officia quisquam vero nam, cum dolor earum. Numquam praesentium hic a est, impedit totam in, recusandae, voluptatem pariatur soluta ad dolor voluptate eaque debitis porro odit vero. Doloremque repudiandae blanditiis odit eligendi!
</p>
    </div>
    <div className="about-usps">
                <Usp icon={<TargetIcon size={26} />} title="Doelgericht" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt iste beatae est quam odio dolorum quasi, eveniet saepe nemo cumque voluptas, consequatur eligendi" classname="usp usp1" />
                <Usp icon={<HandshakeIcon size={26} />} title="Persoonlijk" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt iste beatae est quam odio dolorum quasi, eveniet saepe nemo cumque voluptas, consequatur eligendi" classname="usp usp2" />
                <Usp icon={<BriefcaseIcon size={26} />} title="Professioneel" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt iste beatae est quam odio dolorum quasi, eveniet saepe nemo cumque voluptas, consequatur eligendi" classname="usp usp3" />
            </div>
</section>
    </main>
    )
}
export default About;