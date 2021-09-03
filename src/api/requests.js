import axios from 'axios'

// axios.defaults.baseURL = 'https://api.github.com';
const client = axios.create({
  baseURL: 'https://api.github.com'
})

export const makeRequest = ({
  url, method = 'get', params = {}, headers = { Authorization: `token ${localStorage.getItem('token')}` }, data = {}
}) => client({ url, method, params, headers, data })

export const addZeroes = (val) => val < 10 ? `0${val}` : val
