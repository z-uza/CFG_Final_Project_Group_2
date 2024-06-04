import { render, screen } from '@testing-library/react';
import App from '../App';

jest.mock('../components/Favourites/FavouritesList', () => {
  return () => <div> FavouritesList </div>
});


test('renders FavouritesList component for /favourites route', () => {
  window.history.pushState({}, 'Favourites list', '/favourites');

  render(
      <App />
  );

  const favouritesList = screen.getByText(/FavouritesList/i);
  expect(favouritesList).toBeInTheDocument();
});

///////////////
