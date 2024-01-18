
import { Grid, Button, Alert } from '@mui/material';

interface ErrorMessageShowProps {
    message: any,
    display: boolean,
    severity: any, //error ,warning, info, success
}

const ErrorMessageShow = (props: ErrorMessageShowProps) => {

    return (

        <Grid item xs={8} display={props.display ? 'block' : 'none'}>
            <Alert severity={props.severity ? props.severity : 'error'} sx={{ bgcolor: 'background.paper' }} >{props.message}</Alert>
        </Grid>
    )
}

export default ErrorMessageShow;