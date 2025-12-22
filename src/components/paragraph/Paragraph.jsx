import './Paragraph.css'

function Paragraph({title, text, className, color}){
    return ( 
    <div className={`${className} ${color}`}>
    <h3>{title}</h3>
    <p>{text}</p>
    </div>
    )
}

export default Paragraph;