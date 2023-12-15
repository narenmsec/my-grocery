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

const service = {
    //getRtoPendingContractData,
    getAllItems,
    addItems,
}

export default service;