import axios from "axios";

// axios.defaults.baseURL = 'https://api.github.com';
const client = axios.create({
    baseURL: "https://api.github.com"
});

export const makeRequest = ({
    url, method = "get", params = {}, headers = {}
}) => client({url, method, params, headers});
