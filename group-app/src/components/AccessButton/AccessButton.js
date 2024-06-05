import Button from 'react-bootstrap/Button'
import './/AccessButton.css'
import { useNavigate } from "react-router-dom";

function AccessButton() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `Access`; 
        navigate(path);
        }
    return (
        <Button variant="primary" className='AccessButton' onClick={routeChange}> Theme Park Accessibility </Button>
        )
}

export default  AccessButton;


