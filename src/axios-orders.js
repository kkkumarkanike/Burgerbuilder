import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://burgerbuilder-ebba7.firebaseio.com/'
});


export default instance;