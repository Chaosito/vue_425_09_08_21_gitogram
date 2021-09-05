import axios from 'axios'

// axios.defaults.baseURL = 'https://api.github.com';
const client = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    accept: 'application/vnd.github.v3.html+json'
  }
})

export const makeRequest = ({
  url, method = 'get', params = {}, headers = { }, data = {}
}) => client({ url, method, params, headers: { ...headers, Authorization: `token ${localStorage.getItem('token')}` }, data })

export const addZeroes = (val) => val < 10 ? `0${val}` : val
