import "./Alink.css";

function Alink({ className, text, href }) {
    return (
      <a href={href}  className={className}>
        {text}
      </a>
    );
  }

export default Alink;