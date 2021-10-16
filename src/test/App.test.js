import { render, screen } from '@testing-library/react';
import { hydrate } from 'react-dom';
import App from '../App';

it('renders main component', () => {
  render(<App />);
  const heading = screen.getByRole("heading");
  const headingTitle = screen.getByText(/WOD Journal/);
  expect(heading).toBeInTheDocument();
  expect(headingTitle).toBeInTheDocument();
});
