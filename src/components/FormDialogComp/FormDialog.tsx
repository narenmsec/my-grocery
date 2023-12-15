import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Service from '../../service/service';


interface FormDialogProps {
  showDialogFlag: boolean,
  handleClose: any,
  handleSaveCall: any,
}

export default function FormDialog(props: FormDialogProps) {
  const [name, setName] = React.useState<any>('');
  const [category, setCategory] = React.useState<any>('');
  const [open, setOpen] = React.useState<any>(props.showDialogFlag);

  // useEffect(() => {
  //   setName('');
  //   setCategory('');
  // }, [])

  const handleSave = () => {
    if (name !== '' && category !== '') {
      var param = {
        'category': category,
        'itemName': name
      };
      props.handleSaveCall(param);
      setName('');
      setCategory('');
    } else {
      alert('Enter both name and category');

    }
  }

  const categoryTextChange = (event: any) => {
    setCategory(event.target.value);
  }

  const nameTextChange = (event: any) => {
    setName(event.target.value);
  }

  return (
    <React.Fragment>
      <Dialog open={props.showDialogFlag || open} >
        <DialogTitle>Add Items</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add new items if needed
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Item Name"
            type="name"
            fullWidth
            variant="standard"
            value={name}
            onChange={nameTextChange}

          />

          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="Item Category"
            type="category"
            fullWidth
            variant="standard"
            value={category}
            onChange={categoryTextChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}