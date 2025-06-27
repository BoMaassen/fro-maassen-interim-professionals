import "./Usp.css";
function Usp({icon, title, text, classname}){
return(
    <article className={classname}>
                <div> 
                    {icon}
                    <h3>{title}</h3>
                </div>
                <p>{text}</p>
            </article>
);
}
export default Usp;