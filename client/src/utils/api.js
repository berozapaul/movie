import axios from 'axios';
const URL = process.env.REACT_APP_MOVIE_API_URL;
export const findData = async (qry) => {
    const qryObj = qry ? { params: { q: qry } } : {};
    const { data } = await axios.get(URL, qryObj);

    return data;
};