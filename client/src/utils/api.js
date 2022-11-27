import axios from 'axios';
const URL = process.env.REACT_APP_MOVIE_API_URL;
export const findData = async (qry) => {
    const qryObj = qry ? { params: { q: qry } } : {};
    const { data } = await axios.get(URL, qryObj);

    return data;
};

export const postData = async (formData) => {
    // const data = qry ? { params: data } : {};
    const { res } = await axios.post(URL, formData);
    
    return res;
};


// axios.post('/user', {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });