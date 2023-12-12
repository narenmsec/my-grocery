import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AutoCompleteField() {
  return (
    <Autocomplete
      id="disabled-options-demo"
      options={topFilms}
      getOptionDisabled={(option) =>
        option === topFilms[0] || option === topFilms[2]
      }
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Dropdown" />}
    />
  );
}

// const topFilms = [
//     { title: "The Shawshank Redemption", year: 1994 },
//     { title: "The Godfather", year: 1972 },
//     { title: "The Godfather: Part II", year: 1974 },
//     { title: "The Dark Knight", year: 2008 },
//     { title: "12 Angry Men", year: 1957 },
//     { title: "Schindler's List", year: 1993 },
//     { title: "Pulp Fiction", year: 1994 }
//   ];

  const topFilms = ['item1','item2','item3','item4','item5'];
