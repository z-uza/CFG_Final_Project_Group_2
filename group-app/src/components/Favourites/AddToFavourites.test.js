import { render, fireEvent,screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddToFavouritesBtn from './FavouritesButton';

describe('AddToFavouritesBtn', () => {
  const mockRideName = 'mock ride';
  const mockAddToFavourites = jest.fn(); // simulate the addToFavourites function

  beforeEach(() => {
    localStorage.clear(); // ensure a clean state each time a test is run
    jest.clearAllMocks();
  });

  test('renders the "Add To Favourites" button', () => {
    render(<AddToFavouritesBtn rideName={mockRideName} addToFavourites={mockAddToFavourites} />);
    expect(screen.getByText(/Add to Favourites/i)).toBeInTheDocument();
  });

  test('calls addToFavourites function and updates localStorage when clicked', () => {
    render(<AddToFavouritesBtn rideName={mockRideName} addToFavourites={mockAddToFavourites} />);
    const button = screen.getByText(/Add to Favourites/i);

    fireEvent.click(button); // simulates the click event

    expect(mockAddToFavourites).toHaveBeenCalledWith(mockRideName); // expect the Add To Favourites function to have been passed the ride name
    expect(localStorage.getItem(`favourite-${mockRideName}`)).toBe('true');

    expect(button).toBeDisabled(); // add to favourites button should be disabled once clicked
    expect(button).toHaveTextContent('Added'); // add to favourites button should have different text once clicked
  });

  test('renders button text as "Added" if ride has already been favourited', () => {
    localStorage.setItem(`favourite-${mockRideName}`, 'true');
    render(<AddToFavouritesBtn rideName={mockRideName} addToFavourites={mockAddToFavourites} />);
    const button = screen.getByText(/Added/i);
    
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled(); // add to favourites button should be disabled once it's been added
  });
});
