import { makeRequest } from '../requests.js'

export const getUser = () => {
  return makeRequest({
    url: 'https://api.github.com/user'
  })
}
