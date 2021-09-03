import { makeRequest } from '../requests.js'

export const getToken = ({ clientId, code, clientSecret }) => makeRequest({
  url: 'https://webdev-api.loftschool.com/github',
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  },
  //   params: { clientId, code, clientSecret },
  data: { clientId, code, clientSecret }
})
