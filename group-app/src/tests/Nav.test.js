import React, { act } from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../components/Nav/Navigation';

const renderWithRouter = (comp, { route = '/' } = {}) => { // will default to / if no route value is specified
  window.history.pushState({}, 'Test page', route);

  return render( // simulates navigation with the nav bar component
    <MemoryRouter initialEntries={[route]}> 
      {comp}
    </MemoryRouter>
  );
};

describe('Navigation bar', () => {
  test('renders Home label in nav bar when not on home page', () => {
    renderWithRouter(<NavBar />, { route: '/favourites' });

    const navBar = screen.getByTestId('main-nav');

    expect(within(navBar).getByTestId('nav-item-home')).toBeInTheDocument();
    expect(within(navBar).getByTestId('nav-item-favourites')).toBeInTheDocument();
    expect(within(navBar).getByTestId('nav-item-about')).toBeInTheDocument();
  });

  test('does not render Home label on nav bar when on home page', () => {
    renderWithRouter(<NavBar />, { route: '/' });

    const navBar = screen.getByTestId('main-nav');

    expect(within(navBar).queryByTestId('nav-item-home')).not.toBeInTheDocument();
    expect(within(navBar).getByTestId('nav-item-favourites')).toBeInTheDocument();
    expect(within(navBar).getByTestId('nav-item-about')).toBeInTheDocument();
  });
});
