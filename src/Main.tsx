import React from 'react';
import { increment, decrement } from './redux/common/commonSlice';
import { useDispatch, useSelector } from 'react-redux';
import CheckboxListSecondary from './components/ListViewWIthCheckBox';
import Autocomplete from './components/AutoCompleteField';

function Main() {

    const dispatch = useDispatch();
    const countFromRedux = useSelector((state: any) => state.common.count);

    return (
        <div>
            <Autocomplete />
            <CheckboxListSecondary />
        </div>
    );

}
export default Main;