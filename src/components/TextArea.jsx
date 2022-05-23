import React from 'react';
import { Controller, useFormContext } from "react-hook-form";
import { TextField } from '@mui/material';

export default function TextArea() {
  const { control, register } = useFormContext();
  return (
    <div>
      <Controller
        control={ control }
        name="obs"
        defaultVal=""
        render={({ field }) => (
          <label {...field}>
            Observações
            <TextField
              {...register('obs')}
              multiline
              data-testid="obs-textarea"
              variant="standard"
              color="success"
              maxLength={ 1000 }
            />
          </label>
        )}
      />
    </div>
  )
}
