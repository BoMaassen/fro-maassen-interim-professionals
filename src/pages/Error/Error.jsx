import './Error.css'
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

function Error() {
    const navigate = useNavigate();

    return (<main>
        <section className='error-section'>
            <h2>De pagina die je zoekt bestaat niet</h2>
            <div>
                <h3>Keer terug naar de</h3>
                <Button className="text-button purple" text="home pagina" type="button" onClick={() => navigate(`/`)} />
            </div>
        </section>
    </main>
    )
}
export default Error;