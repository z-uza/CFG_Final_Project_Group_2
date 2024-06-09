import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import fetchMock from 'jest-fetch-mock';
import ThemeParks from './Rides';

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

jest.mock('./RideTable', () => {
  return jest.fn(() => <div>Mocked RidesTable</div>);
});

test('fetches and displays theme parks', async () => {
  fetch.mockResponseOnce(JSON.stringify({
    lands: [
      {
        rides: [ 
          { name: 'Ride 1', wait_time: 15, is_open: true },
          { name: 'Ride 2', wait_time: 5, is_open: false }
        ]
      }
    ]
  }));

  render(
    <MemoryRouter initialEntries={['/theme-parks/legoland']}>
      <Routes>
        <Route path="/theme-parks/:themePark" element={<ThemeParks />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText('Legoland Wait Times')).toBeInTheDocument();

  // await waitFor(() => {
  //   expect(screen.getByText('Mocked RidesTable')).toBeInTheDocument();
  // });

  expect(fetch).toHaveBeenCalledWith('http://localhost:5000/get-rides?id=1');
});
