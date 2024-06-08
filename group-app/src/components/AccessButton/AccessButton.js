import Button from 'react-bootstrap/Button'
import './/AccessButton.css'
import { useNavigate } from "react-router-dom";

// function to enable the button onclick event to change the route/path from home to access
function AccessButton() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/access`; 
        navigate(path);
        }
    return (
        <Button variant="primary" className='AccessButton' onClick={routeChange}> Theme Park Accessibility </Button>
        )
}

export default  AccessButton;


