import './Contact.css'
import { PhoneIcon, EnvelopeIcon } from "@phosphor-icons/react";
import fotoFrank from "../../assets/Frank.jpeg";
import { useForm } from 'react-hook-form';
import Button from '../../components/button/Button';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef } from 'react';
import Input from '../../components/input/input';


function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const recaptchaRef = useRef();
    function handleFormSubmit(data) {
        recaptchaRef.current.execute();
        console.log(data);
    }

    function onReCAPTCHAChange(token) {
        if (!token) return; // gebruiker heeft reCAPTCHA niet voltooid
        // Hier kun je nu echt de data versturen
        console.log("Formulier verzonden met token:", token);
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
                <h2>Neem contact op</h2>
                <div className='name-form'>
                    <Input inputType="text" inputName="firstname" placeholder="Voornaam" register={register} error={errors}
                        validationRules={{
                            required: {
                                value: true,
                                message: "Voornaam is verplicht",
                            }
                        }} />
                    <Input inputType="text" inputName="lastname" placeholder="Achternaam" register={register} error={errors}
                        validationRules={{
                            required: {
                                value: true,
                                message: "Achternaam is verplicht",
                            }
                        }} />
                </div>
                <div className='contacts-form'>
                    <Input inputType="text" inputName="email" placeholder="Email" register={register} error={errors}
                        validationRules={{
                            required: {
                                value: true,
                                message: "Email is verplicht",
                            }
                        }} />
                    <Input inputType="text" inputName="tel" placeholder="Telefoonnummer" register={register} error={errors}
                        validationRules={{
                            required: {
                                value: true,
                                message: "Telefoonnummer is verplicht",
                            }
                        }} />
                </div>
                <label htmlFor='message'>
                    <textarea id='message' placeholder='Bericht' {...register("message")} />
                </label>
                <ReCAPTCHA ref={recaptchaRef} size="invisible" onChange={onReCAPTCHAChange}
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // test key
                />
                <Button className="text-button purple" text="versturen" type="submit" />
            </form>
        </section>
    </main>
    )
}
export default Contact;