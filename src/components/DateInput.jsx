import React from "react";
import TodayIcon from '@mui/icons-material/Today';
import { Controller, useFormContext } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateInput({ prefix, testid }) {
  const { register, control, formState: { errors } } = useFormContext();
  const label = prefix === 'Data Inicial*' ? 'initialDate' : 'finalDate';

  return (
    <div data-testid={testid}>
      <Controller
        control={ control }
        name={label}
        render={({ field }) => (
          <DatePicker
            placeholderText={prefix}
            label={prefix}
            onChange={(date) => field.onChange(date)}
            selected={field.value}
          />
        )}
      />
      <TodayIcon color="action"/>
    </div>
  );
}