import Button from 'react-bootstrap/Button'
import './/GoToHomeButton.css'
import { useNavigate } from "react-router-dom";

function GoToHomeButtonButton() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `Home`; 
        navigate(path);
        }
    return (
        <Button variant="primary" className='AccessButton' onClick={routeChange}> Home </Button>
        )
}

export default  GoToHomeButtonButton;