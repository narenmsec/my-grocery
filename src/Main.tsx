import React, { useEffect, useState } from 'react';
import { increment, decrement } from './redux/common/commonSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import CheckboxList from './components/ListViewWIthCheckBox';
import Autocomplete from './components/AutoCompleteField';
import Typography from '@mui/material/Typography';
import AddItemsDialog from './components/FormDialogComp/FormDialog';
import MobileOtpSend from './components/OtpSend/MobileOtpSend';
import Service from './service/service';

function Main() {

    const dispatch = useDispatch();
    const countFromRedux = useSelector((state: any) => state.common.count);

    const [input, setInputValue] = useState<any>([]);
    const [allItems, setAllItems] = useState<any>([]);
    const [addItemsDialogOpen, setAddItemsDialogOpen] = useState<boolean>(false);
    const [mobileOtpDialogOpen, setMobileOtpDialogOpen] = useState<boolean>(false);

    const onChangeHandler = (data: any) => {
        console.log('out*********' + data.currentTarget.innerText);
        setInputValue([...input, data.currentTarget.innerText]);
        // console.log('Ary length*********' + input.length);
    }


    function fetchAllItems() {
        Service.getAllItems()
            .then((response) => {
                if (response) {
                    // setInputValue(response);
                    console.log(response.data.body);
                    setAllItems(response.data.body);
                }
            }).catch(error => {
                // setErrorMtd(error);
            });
    }

    useEffect(() => {
        // alert('Chwk');
        fetchAllItems();
        // Service.getAllItems()
        //     .then((response) => {
        //         if (response) {
        //             // setInputValue(response);
        //             console.log(response.data.body);
        //             setAllItems(response.data.body);
        //         }
        //     }).catch(error => {
        //         // setErrorMtd(error);
        //     });



    }, []);

    useEffect(() => {
        // alert('Chwk');
        fetchAllItems();
        // Service.getAllItems()
        //     .then((response) => {
        //         if (response) {
        //             // setInputValue(response);
        //             console.log(response.data.body);
        //             setAllItems(response.data.body);
        //         }
        //     }).catch(error => {
        //         // setErrorMtd(error);
        //     });



    }, []);

    const handleClickOpen = () => {
        setAddItemsDialogOpen(true);
    };

    const dialogClose = () => {
        setAddItemsDialogOpen(false);
    }

    // const mobileOtpHandleClickOpen = () => {
    //     setMobileOtpDialogOpen(true);
    // };

    // const mobileOtpDialogClose = () => {
    //     setMobileOtpDialogOpen(false);
    // }


    const dialogSave = (param: any) => {
        Service.addItems(param)
            .then((response) => {
                if (response) {
                    // setInputValue(response);
                    console.log(response);
                    fetchAllItems();
                    // setAllItems([...allItems , param]);
                }
            }).catch(error => {
                // setErrorMtd(error);
            });
        setAddItemsDialogOpen(false);
    }

    // const mobileOtpdialogSave = (param: any) => {
    //     Service.generateOtp(param)
    //         .then((response) => {
    //             if (response) {
    //                 // setInputValue(response);
    //                 console.log(response);
    //                 // setAllItems([...allItems , param]);
    //             }
    //         }).catch(error => {
    //             // setErrorMtd(error);
    //         });
    //     setMobileOtpDialogOpen(false);
    // }

    return (
        <div >
            <Typography variant="h6" gutterBottom>
                Add Items
            </Typography>
            <div style={{ backgroundColor: "lightblue", padding: "16px 16px 16px 16px" }}>
                <Autocomplete dropDownName='Items list' dropDownValues={allItems} ID='name' onChangeHandler={onChangeHandler} />
                <Button variant="outlined" onClick={handleClickOpen}>
                    AddItems
                </Button>
            </div>
            <CheckboxList inputArray={input} />
            {/* <Button variant="outlined" onClick={mobileOtpHandleClickOpen}>
                OTP generate
            </Button> */}
            <AddItemsDialog showDialogFlag={addItemsDialogOpen} handleClose={dialogClose} handleSaveCall={dialogSave} />
            {/* <MobileOtpSend showDialogFlag={mobileOtpDialogOpen} handleClose={mobileOtpDialogClose} handleSaveCall={mobileOtpdialogSave} /> */}
        </div>
    );

}
export default Main;