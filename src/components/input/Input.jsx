import "./Input.css";

function Input({inputType, inputName, placeholder, validationRules, register, error}){
return(
<label htmlFor={inputName}>
                    <input type={inputType} id={inputName} placeholder={placeholder} {...register(inputName, validationRules)} />
                    {error[inputName] && <p>{error[inputName].message}</p>}
                </label>
)
}

export default Input;