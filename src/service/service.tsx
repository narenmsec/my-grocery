import mainAPI from "../api/MainAPI";

//unused
/* const getRtoPendingContractData = (details: {}) => {
    return RTOMappingAPI.post('/contract/getRtoPendingContractData', details,false)
} */

const getAllItems = () => {
    return mainAPI.get('/fetchItems');
}

const addItems = (param: {}) => {
    return mainAPI.post('/insertItem', param);
}

const generateOtp = (param: {}) => {
    return mainAPI.post('/sendSMS', param);
}

const service = {
    //getRtoPendingContractData,
    getAllItems,
    addItems,
    generateOtp,
}

export default service;