import {configureStore} from '@reduxjs/toolkit';
import commonSlice from './common/commonSlice';



const store = configureStore({
    reducer: {
        common: commonSlice,
    }

});

export default store;