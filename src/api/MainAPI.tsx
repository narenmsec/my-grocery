import axios from 'axios';

var backEndBaseURL = process.env.REACT_APP_BACKEND_URL;
const aPIInstance= axios.create({
    headers: { "Content-Type": "application/json",}
});

const post = (url: any, param: any) => {
  return aPIInstance.post(backEndBaseURL + url, param);
} 


const get = (url: any) => {
  return aPIInstance.get(backEndBaseURL + url);
} 

export const aPIHelper = { 
  post, 
  get
};
export default aPIHelper;
