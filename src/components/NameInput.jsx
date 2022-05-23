import React from 'react';
import TextField from '@mui/material/TextField';
import { useFormContext, Controller } from 'react-hook-form';

export default function NameInput() {
  const { register, control, formState: { errors } } = useFormContext();
  return (
    <div>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) =>  (
          <TextField
            { ...field }
            label="Nome*"
            variant="standard"
            color="success"
            error={ errors.name ? true : false }
            data-testid="name-input"
            { ...register('name')}
          />
        )}
      />
      <span className="rigth">0/40</span>
    </div>
  );
}
