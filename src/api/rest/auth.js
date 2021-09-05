import { makeRequest } from '../requests.js'

const clientId = process.env.VUE_APP_GITHUB_AUTH_CLIENT_ID
const clientSecret = process.env.VUE_APP_GITHUB_AUTH_CLIENT_SECRET

export const goToAuthPage = () => {
  const githubAuthApi = 'https://github.com/login/oauth/authorize'

  const params = new URLSearchParams()
  params.append('client_id', clientId)
  params.append('scope', 'public_repo user')

  window.location.href = `${githubAuthApi}?${params}`
}

export const getTokenByCode = ({ code }) => makeRequest({
  url: 'https://webdev-api.loftschool.com/github',
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  },
  //   params: { clientId, code, clientSecret },
  data: { clientId, code, clientSecret }
})
