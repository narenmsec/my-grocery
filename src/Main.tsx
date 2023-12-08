import React from 'react';
import { increment, decrement } from './redux/common/commonSlice';
import { useDispatch, useSelector } from 'react-redux';
import CheckboxListSecondary from './components/ListViewWIthCheckBox';

function Main() {

    const dispatch = useDispatch();
    const countFromRedux = useSelector((state:any) =>  state.common.count);

    return(
        <div>
            <button onClick={()=> {
                dispatch(increment(2));
            }}> Increment
            </button>

            <button onClick={()=> {
                dispatch(decrement(2));
            }}> Decrement
            </button>

            <p>
                check {countFromRedux}
                <CheckboxListSecondary/>
            </p>
        </div>
    );

}
export default Main;