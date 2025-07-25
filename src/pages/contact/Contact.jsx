import './Contact.css'
import {PhoneIcon, EnvelopeIcon } from "@phosphor-icons/react";
import fotoFrank from "../../assets/Frank.jpeg";

function Contact(){
    return( <main>
    <section>
        <div className='contact-card'>
          <span><img src={fotoFrank} alt='Frank Maassen'/></span>  
          <div>
            <h4>Frank Maassen</h4>
            <div>
                <PhoneIcon size={12} />
                <h5>06-41000136</h5>
            </div>
            <div>
                <EnvelopeIcon size={12} />
                <h5>info@maasseninterimprofessionals.nl</h5>
            </div>
          </div>

        </div>
    </section>
    </main>
    )
}
export default Contact;