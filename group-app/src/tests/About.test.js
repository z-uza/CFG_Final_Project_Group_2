import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'
import About from "../components/About/About"

jest.mock('../components/About/TeamCards', () => { // Mock the TeamCards component
    return () => <div> Mocked TeamCards</div>;
});

describe('About Component', () => {
    it('renders correctly with team member cards', () => {
        render(
        <About />
        ); // Render the About Us component
        
    // Check if the mocked TeamCards component is rendered
    const mockedTeamCards = screen.getByText('Mocked TeamCards');
    mockedTeamCards.forEach(card => {
      expect(card).toBeInTheDocument();
    });
    
    // Check if each team member's name is rendered
    expect(screen.getByText('Beth')).toBeInTheDocument();
    expect(screen.getByText('Bronwen')).toBeInTheDocument();
    expect(screen.getByText('Majella')).toBeInTheDocument();
    expect(screen.getByText('Sarah')).toBeInTheDocument();
    expect(screen.getByText('Warda')).toBeInTheDocument();
  });
});



