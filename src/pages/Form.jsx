import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { DateInput, NameInput, SelectInput, TextArea } from '../components';
import { schema } from '../schemas';
import { property, lab } from '../mocks';
import { Button, Alert } from '@mui/material';

function Form() {
  const methods = useForm({ resolver: yupResolver(schema) });
  const onSubmit = data => {
    console.log({
      nome: data.name,
      dataInicial: data.initialDate.toISOString(),
      dataFinal: data.finalDate.toISOString(),
      infosPropriedade: {
        id: (property.find((p) => p.name === data.properties)).id,
        nome: data.properties,
      },
      cnpj: (property.find((p) => p.name === data.properties)).cnpj,
      laboratorio: {
        id: (lab.find((p) => p.name === data.lab)).id,
        nome: data.lab,
      },
      observacoes: data.obs,
    });
  };

  return (
    <FormProvider { ...methods }>
      <form className="form-container" onSubmit={ methods.handleSubmit(onSubmit) }>
        <header className="form-header">
          <h2 className="form-title">Teste front-end</h2>
          <Button
            type="submit" 
            data-testid="submit-button"
          >
            SALVAR
          </Button>
        </header>
        <NameInput />
        <DateInput prefix="Data Inicial*" testid="initial-date-input" />
        <DateInput prefix="Data Final*" testid="final-date-input" />
        <SelectInput data={ property } prefix="Propriedade*" testid="properties-select" />
        <SelectInput data={ lab } prefix="Laboratório*" testid="lab-select" />
        <TextArea />
        <span className="rigth">0/1000</span>
      </form>
      {Object.keys(methods.formState.errors).length > 0
        && (
          <Alert variant="filled" severity="error" data-testid="error-alert">
            Preencha os campos obrigatorios
          </Alert>)}
    </FormProvider>
  );
}

export default Form;
