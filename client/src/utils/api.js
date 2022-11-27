import axios from 'axios';
import { sentryLog } from './site';
const URL = process.env.REACT_APP_MOVIE_API_URL;
export const findData = async (qry) => {
    try {
        const qryObj = qry ? { params: { q: qry } } : {};
        const { data } = await axios.get(URL, qryObj);
    
        return data;
    } catch (e) {
       sentryLog(e);
    }

};

export const postData = async (formData) => {
    // const data = qry ? { params: data } : {};
    const { res } = await axios.post(URL, formData);
    
    return res;
};
