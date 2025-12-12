import "./Button.css";

function Button({ className, text, type, onClick, icon }) {
    return (
      <button className={className} type={type} onClick={onClick}>
        {icon}
        {text}
      </button>
    );
  }

export default Button;

