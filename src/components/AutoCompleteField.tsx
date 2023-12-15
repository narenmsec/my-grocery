import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface AutoCompleteProps {
  onChangeHandler?: any,
  dropDownValues: [],
  ID: any,
  dropDownName: string,
}


const AutoCompleteField = (props: AutoCompleteProps) => {
  const options = props.dropDownValues.map((option: any) => {
    const firstLetter = option[props.ID][0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      id="grouped-demo"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option[props.ID]}
      sx={{ width: 300 }}
      onChange={props.onChangeHandler}
      renderInput={(params) => <TextField {...params} label={props.dropDownName}/>}
    />
  );
}


export default AutoCompleteField;