import React, { useState } from 'react';
import { increment, decrement } from './redux/common/commonSlice';
import { useDispatch, useSelector } from 'react-redux';
import CheckboxList from './components/ListViewWIthCheckBox';
import Autocomplete from './components/AutoCompleteField';
import Typography from '@mui/material/Typography';
import { margin } from '@mui/system';


function Main() {

    const dispatch = useDispatch();
    const countFromRedux = useSelector((state: any) => state.common.count);

    const [input, setInputValue] = useState<any>(["Sample"]);
    const onChangeHandler = (data: any) => {
        console.log('out*********' + data.currentTarget.innerText);
        setInputValue([...input , data.currentTarget.innerText]);
        // console.log('Ary length*********' + input.length);
    }

    return (
        <div >
            <Typography variant="h6" gutterBottom>
                Add Items
            </Typography>
            <div style={{ backgroundColor: "lightblue", padding: "16px 16px 16px 16px" }}>
                <Autocomplete onChangeHandler={onChangeHandler} />

            </div>
            <CheckboxList inputArray={input} />
        </div>
    );

}
export default Main;