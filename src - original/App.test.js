import { render, screen } from '@testing-library/react';
import App from './App';

test('Presenta el enlace de aprendizaje de react', () => {
  render(<App />);
  //Elemento de pantalla por su texto
  const linkElement = screen.getByText(/Aprender React/i);
  //Valida si el elemento en pantalla existe con el texto
  expect(linkElement).toBeInTheDocument();
});
