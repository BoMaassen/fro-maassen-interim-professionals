import './Contact.css'
import { PhoneIcon, EnvelopeIcon } from "@phosphor-icons/react";
import fotoFrank from "../../assets/frank-maassen.PNG";
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import Formulier from '../../components/form/Formulier';
import ContactSection from '../../components/contact/ContactSection';


function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const recaptchaRef = useRef();

    return (<main>
        <section className='contact-section'>
            <div className='contact-card'>
                <span><img src={fotoFrank} alt='Frank Maassen' /></span>
                <div className='contact-info'>
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
            <Formulier title="Neem contact op"/>
        </section>
    </main>
    )
}
export default Contact;