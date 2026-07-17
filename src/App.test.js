import { render, screen, within } from '@testing-library/react';
import App from './App';

test('renders the hero heading', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
});

test('renders every navigation link', () => {
  render(<App />);
  const nav = screen.getByRole('navigation', { name: /portfolio navigation/i });
  ['Home', 'Education', 'Skills', 'Projects', 'Contact'].forEach((label) => {
    expect(within(nav).getByRole('link', { name: label })).toBeInTheDocument();
  });
});

test('renders the contact form fields', () => {
  render(<App />);
  expect(screen.getByLabelText('Name')).toBeInTheDocument();
  expect(screen.getByLabelText('Email')).toBeInTheDocument();
  expect(screen.getByLabelText('Message')).toBeInTheDocument();
});
