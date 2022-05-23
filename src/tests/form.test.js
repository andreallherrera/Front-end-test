import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('#Form', () => {
  describe('O form possui todos os elementos requeridos', () => {
    test('A pagina contém um botao "SALVAR"', () => {
      render(<App />);
      const button = screen.getByTestId('submit-button');
      expect(button).toBeInTheDocument();
    });

    test('A pagina contém um input "nome"', () => {
      render(<App />);
      const name = screen.getByTestId('name-input');
      expect(name).toBeInTheDocument();
    });

    test('A pagina contém um input "Data Inicial"', () => {
      render(<App />);
      const initialDate = screen.getByTestId('initial-date-input');
      expect(initialDate).toBeInTheDocument();
    });

    test('A pagina contém um input "Data Final"', () => {
      render(<App />);
      const finalDate = screen.getByTestId('final-date-input');
      expect(finalDate).toBeInTheDocument();
    });

    test('A pagina contém um combobox "Propriedades"', () => {
      render(<App />);
      const properties = screen.getByTestId('properties-select');
      expect(properties).toBeInTheDocument();
    });

    test('A pagina contém um combobox "Laboratorio"', () => {
      render(<App />);
      const lab = screen.getByTestId('lab-select');
      expect(lab).toBeInTheDocument();
    });

    test('A pagina contém uma textarea "Observacoes"', () => {
      render(<App />);
      const obs = screen.getByTestId('obs-textarea');
      expect(obs).toBeInTheDocument();
    });
  });
});
