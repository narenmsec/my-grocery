import React from 'react';
import { increment, decrement } from './redux/common/commonSlice';
import { useDispatch, useSelector } from 'react-redux';
import CheckboxListSecondary from './components/ListViewWIthCheckBox';
import Autocomplete from './components/AutoCompleteField';
import Typography from '@mui/material/Typography';
import { margin } from '@mui/system';


function Main() {

    const dispatch = useDispatch();
    const countFromRedux = useSelector((state: any) => state.common.count);

    return (
        <div >
            <Typography variant="h6" gutterBottom>
                Add Items
            </Typography>
            <div style={{ backgroundColor: "lightblue", padding: "16px 16px 16px 16px" }}>
                <Autocomplete />

            </div>
            <CheckboxListSecondary />
        </div>
    );

}
export default Main;