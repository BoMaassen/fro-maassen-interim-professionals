import './InputFile.css';

function InputFile({className, inputId, name, labelName, validationRules, onChange, type, register, errors, children}){
    return(
        <>
            <label className={className} htmlFor={inputId}>
                {children}
                {labelName}
                <input
                    id={inputId}
                    {...register(name, validationRules)}
                    type={type}
                    onChange={onChange}
                />
                {errors[inputId] && <p className="error-message">{errors[inputId].message}</p>}
            </label>
        </>
    )
}
export default InputFile;