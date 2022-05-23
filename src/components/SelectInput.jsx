import React from 'react';
import { Controller, useFormContext } from "react-hook-form";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function SelectInput({ data, prefix, testid }) {
  const { register, control, formState: { errors } } = useFormContext();
  const label = prefix === 'Propriedade*' ? 'properties' : 'lab';

  return (
    <div>
      <Controller 
        name={ label }
        control={ control }
        defaultValue=""
        label={ prefix }
        render={({ field }) => (
          <div>
            <InputLabel>{prefix}</InputLabel>
            <Select
              {...field}
              {...register(label)}
              color="success"
              control={control}
              variant="standard"
              data-testid={testid}
              error={ errors[`${label}`] ? true : false }
            >
              {data.map((d, index) => (
                <MenuItem value={d.name} id={d.cnpj} key={index} data-testid={`${testid}${index}`}>
                  <div>{d.name}</div>
                  <span>{d.cnpj}</span>
                </MenuItem>
              ))}
            </Select>
          </div>
        )}
      />
    </div>
  )
}