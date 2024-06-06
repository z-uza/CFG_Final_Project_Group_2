import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import NavBar from '../components/Nav/Navigation';

describe('NavBar Component', () => {
  const renderWithRouter = (ui, { route = '/' } = {}) => {
    return render(
      <MemoryRouter initialEntries={[route]}>
        {ui}
      </MemoryRouter>
    );
  };

  test('renders Home link when not on home page', () => {
    renderWithRouter(<NavBar />, { route: '/favourites' });

    expect(screen.queryByText(/Home/)).toBeInTheDocument();
    expect(screen.queryByText(/Favourites/)).toBeInTheDocument();
    expect(screen.queryByText(/About/)).toBeInTheDocument();
  });

  test('does not render Home link when on home page', () => {
    renderWithRouter(<NavBar />, { route: '/' });

    expect(screen.queryByText(/Home/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Favourites/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
  });

  test('renders all navigation items correctly', () => {
    renderWithRouter(<NavBar />, { route: '/about' });

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Favourites/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
  });
});
