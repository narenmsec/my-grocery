import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Service from '../../service/service';


interface MobileOtpSendProps {
  showDialogFlag: boolean,
  handleClose: any,
  handleSaveCall: any,
}

export default function MobileOtpSend(props: MobileOtpSendProps) {
  const [mobileNumber, setMobileNumber] = React.useState<any>('');
  const [otp, setOtp] = React.useState<any>('');
  const [open, setOpen] = React.useState<any>(props.showDialogFlag);

  // useEffect(() => {
  //   setName('');
  //   setCategory('');
  // }, [])

  const handleSave = () => {
    if (mobileNumber !== '' && otp !== '') {
      var param = {
        'mobileNumber': mobileNumber,
        'OTP': otp
      };
      props.handleSaveCall(param);
      setMobileNumber('');
      setOtp('');
    } else {
      alert('Enter both MobileNumber and OTP');

    }
  }

  const mobileNumberTextChange = (event: any) => {
    setMobileNumber(event.target.value);
  }

  const otpTextChange = (event: any) => {
    setOtp(event.target.value);
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
            id="otp"
            label="OTP"
            type="otp"
            fullWidth
            variant="standard"
            value={otp}
            onChange={otpTextChange}

          />

          <TextField
            autoFocus
            margin="dense"
            id="mobilenumber"
            label="Mobile number"
            type="mobilenumber"
            fullWidth
            variant="standard"
            value={mobileNumber}
            onChange={mobileNumberTextChange}
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