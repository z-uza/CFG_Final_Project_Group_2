import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AccessButton from './AccessButton';
// unit tests - to run - go to terminal type 'npm run test'and access test menu options
//renders withot error - a check for presence of accessibility button on 
//theme park accessibility page
test('renders without error', () => {
  render(<BrowserRouter><AccessButton /></BrowserRouter>);
  const button = screen.getByText(/Theme Park Accessibility/i);
  expect(button).toBeInTheDocument();
});
//test to check the button is displayed as intended
test('button has correct css class', () => {
  render(<BrowserRouter><AccessButton /></BrowserRouter>);
  const button = screen.getByText(/Theme Park Accessibility/i);
  expect(button).toHaveClass('AccessButton');
});
