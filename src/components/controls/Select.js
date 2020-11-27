import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@material-ui/core";
import React from "react";

const Select = ({ name, label, value, onChange, options }) => {
  return (
    <FormControl variant="outlined">
      <InputLabel>{label}</InputLabel>
      <MuiSelect name={name} value={value} onChange={onChange} label={label}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>

        {options.map((x, index) => (
          <MenuItem key={index} value={x.id}>
            {x.title}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
