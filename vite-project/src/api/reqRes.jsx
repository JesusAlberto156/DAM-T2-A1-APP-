import axios from "axios";

export const reqResApi = axios.create({
        get: 'https://reqres.in/api',
});

export default reqResApi;