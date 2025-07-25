import './Contact.css'
import {PhoneIcon, EnvelopeIcon } from "@phosphor-icons/react";
import fotoFrank from "../../assets/Frank.jpeg";
import { useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';
import Button from '../../components/button/Button';

function Contact(){
const {register, handleSubmit} = useForm();

function handleFormSubmit(data){
    console.log(data);
}

    return( <main>
    <section className='contact-section'>
        <div className='contact-card'>
          <span><img src={fotoFrank} alt='Frank Maassen'/></span>  
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
<form onSubmit={handleSubmit(handleFormSubmit)}>
    <label htmlFor='firstName'>
        Voornaam
        <input type='text' id='firstName' {...register("fistName")}/>
    </label>
    <label htmlFor='lastName'>
        Achternaam
        <input type='text' id='lastName' {...register("lastName")}/>
    </label>
    <label htmlFor='email'>
        Email
        <input type='email' id='email' {...register("email")}/>
    </label>
    <label htmlFor='tel'>
        Telefoonnummer
        <input type='number' id='tel' {...register("tel")}/>
    </label>
    <label htmlFor='message'>
        Bericht
        <textarea id='message' {...register("message")}/>
    </label>
    <Button text="versturen" type="submit"/>
</form>
    </section>

    </main>
    )
}
export default Contact;