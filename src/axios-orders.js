import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-fda01.firebaseio.com/'
});

export default instance;