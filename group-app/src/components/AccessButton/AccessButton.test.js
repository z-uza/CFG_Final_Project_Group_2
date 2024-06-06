import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AccessButton from './AccessButton';

test('renders without error', () => {
  render(<BrowserRouter><AccessButton /></BrowserRouter>);
  const button = screen.getByText(/Theme Park Accessibility/i);
  expect(button).toBeInTheDocument();
});
test('button has correct css class', () => {
  render(<BrowserRouter><AccessButton /></BrowserRouter>);
  const button = screen.getByText(/Theme Park Accessibility/i);
  expect(button).toHaveClass('AccessButton');
});
