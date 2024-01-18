import { useEffect, useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber } from 'react-phone-number-input';
import { Grid, Button } from '@mui/material';
// import PhoneInput from "react-phone-number-input/react-hook-form-input";
import ErrorMessageShow from '../../components/error/TextErrorShow'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Service from '../../service/service';
import Main from '../../Main';

import OtpInput from 'react-otp-input';


const MobileNumber = () => {
    const [loginStatusFlg, setLoginStatusFlg] = useState(false);


    const [mobileNumber, setMobileNumber] = useState('');
    const [otpDisableFlag, setOtpDisableFlag] = useState(true);

    const [messageDispFlag, setMessageDispFlag] = useState(false);
    const [messageContent, setMessageContent] = useState('');
    const [messageSeverity, setMessageSeverity] = useState('success');


    const [otp, setOtp] = useState('');
    const [otpEnterBlock, setOtpEnterBlock] = useState('none');

    // validate
    const [otpValidateDisableFlag, setOtpValidateDisableFlag] = useState(true);


    const mobileNumberChange = (inputValue: any) => {
        console.log(inputValue);
        setMessageDispFlag(false);
        if (inputValue != '' && inputValue != undefined) {
            // console.log('format - ' + formatPhoneNumber(inputValue));
            // console.log('format Intl- ' + formatPhoneNumberIntl(inputValue));
            // console.log('format Boole - ' + isValidPhoneNumber(inputValue));
            if (isValidPhoneNumber(inputValue)) {
                setOtpDisableFlag(false);
                setMobileNumber(inputValue.slice(3));
            } else {
                setOtpDisableFlag(true);
            }
        }
    }

    const generateOTP = () => {
        var param = {
            'mobileNumber': mobileNumber,
            'OTP': '223344'
        };
        Service.generateOtp(param)
            .then((response) => {
                if (response) {
                    var data = response.data;
                    if (data.statusCode === 200) {
                        // success
                        console.log(data.body.message);
                        setMessageDispFlag(true);
                        setMessageContent('OTP successfully sent');
                        setMessageSeverity('success');
                        // For OTP input enable
                        setOtpEnterBlock('block');
                        // Disable OTP button for avoid again generate otp
                        setOtpDisableFlag(true);
                    } else {
                        //fail
                        console.log(data.body.message);
                        setMessageDispFlag(true);
                        setMessageContent(data.body.message);
                        setMessageSeverity('error');
                        // For OTP input enable
                        setOtpEnterBlock('none');
                        // Enable OTP button for again generate otp
                        setOtpDisableFlag(true);
                    }
                }
            }).catch(error => {
                // setErrorMtd(error);
            });
    }

    const changeOtpInput = (event: any) => {
        console.log(event);
        setOtp(event);
        if (event.length >= 6) {
            setOtpValidateDisableFlag(false);
        } else {
            setOtpValidateDisableFlag(true);
        }
    }

    const validateOtp = () => {
        if (otp.length >= 6) {
            setLoginStatusFlg(true);
        }
    }

    return (
        <div>
            {loginStatusFlg ? <div>
                <Main />
            </div> :
                <Card variant="outlined" sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            LOGIN
                        </Typography>
                        <Grid spacing={1}
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid item xs={8}>

                                <PhoneInput
                                    placeholder="Enter phone number"
                                    // value={mobileNumber}
                                    defaultCountry="IN"
                                    onChange={mobileNumberChange} />
                            </Grid>
                            <ErrorMessageShow display={messageDispFlag} message={messageContent} severity={messageSeverity} />
                            <Grid item xs={8}>
                                <Button variant="contained" disabled={otpDisableFlag} size="small" onClick={generateOTP}>
                                    OTP
                                </Button>
                            </Grid>

                            <Grid item xs={8} display={otpEnterBlock}>
                                <OtpInput
                                    value={otp}
                                    onChange={changeOtpInput}
                                    numInputs={6}
                                    renderSeparator={<span>-</span>}
                                    renderInput={(props) => <input {...props} />}
                                />
                            </Grid>
                            <Grid item xs={8} display={otpEnterBlock}>
                                <Button variant="contained" disabled={otpValidateDisableFlag} size="small" onClick={validateOtp}>
                                    Validate
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                    {/* <CardActions>
                <Button variant="contained" disabled={otpDisableFlag} size="small">
                    OTP
                </Button>
            </CardActions> */}
                </Card>
            }
        </div>
    )
}

export default MobileNumber;