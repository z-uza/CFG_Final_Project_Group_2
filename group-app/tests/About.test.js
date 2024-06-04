import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import About from "../src/components/About/About"
import TeamCards from "../src/components/About/TeamCards";

jest.mock('../src/components/TeamCards/TeamCards', () => { // Mock the TeamCards component
    return jest.fn(() => <div>Mocked TeamCards</div>);
});

describe('About Component', () => {
    it('renders correctly with team members', () => {
        render(<About />); // Render the About component
        
        // Check if the mocked TeamCards components are rendered
        expect(screen('Mocked TeamCards')).toBeInTheDocument();
        
        // Check if each team member's name is rendered
        expect(screen('Beth')).toBeInTheDocument();
        expect(screen('Bronwen')).toBeInTheDocument();
        expect(screen('Majella')).toBeInTheDocument();
    });
});



