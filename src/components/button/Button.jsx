import "./Button.css";

function Button({ className, text, type }) {
    return (
        <button className={className} type={type} >{text}</button>
    );
}

export default Button;

