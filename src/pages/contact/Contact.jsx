import './Contact.css'
import { PhoneIcon, EnvelopeIcon } from "@phosphor-icons/react";
import fotoFrank from "../../assets/Frank.jpeg";
import { useForm } from 'react-hook-form';
import Button from '../../components/button/Button';

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function handleFormSubmit(data) {
        console.log(data);
    }

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
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <label htmlFor='firstName'>
                    Voornaam
                    <input type='text' id='firstName' {...register("firstName", {
                        required: {
                            value: true,
                            message: "Dit veld is verplicht",
                        }
                    })} />
                    {errors.firstName && <p>{errors.firstName.message}</p>}
                </label>
                <label htmlFor='lastName'>
                    Achternaam
                    <input type='text' id='lastName' {...register("lastName", {
                        required: {
                            value: true,
                            message: "Dit veld is verplicht",
                        }
                    })} />
                    {errors.lastName && <p>{errors.lastName.message}</p>}
                </label>
                <label htmlFor='email'>
                    Email
                    <input type='email' id='email' {...register("email", {
                        required: {
                            value: true,
                            message: "Dit veld is verplicht",
                        }
                    })} />
                    {errors.email && <p>{errors.email.message}</p>}
                </label>
                <label htmlFor='tel'>
                    Telefoonnummer
                    <input type='number' id='tel' {...register("tel", {
                        required: {
                            value: true,
                            message: "Dit veld is verplicht",
                        }
                    })} />
                    {errors.tel && <p>{errors.tel.message}</p>}
                </label>
                <label htmlFor='message'>
                    Bericht
                    <textarea id='message' {...register("message")} />
                </label>
                <Button text="versturen" type="submit" />
            </form>
        </section>

    </main>
    )
}
export default Contact;