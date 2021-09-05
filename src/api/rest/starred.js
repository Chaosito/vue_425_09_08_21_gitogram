import { makeRequest } from '../requests.js'

export const getStarredRepos = ({ limit }) => {
  const params = new URLSearchParams()
  if (limit) {
    params.append('per_page', limit)
  }

  return makeRequest({
    url: `/user/starred/?${params}`
  })
}

// const contentHeader = 'application/vnd.github.v3.html+json'
// /user/starred/{owner}/{repo}

export const likeRepo = ({ repo, owner }) => makeRequest({
  url: `/user/starred/${owner}/${repo}`,
  method: 'put',
  headers: {
    Authorization: `token ${localStorage.getItem('token')}`,
    accept: 'application/vnd.github.v3.html+json'
  }
})

export const dislikeRepo = ({ repo, owner }) => makeRequest({
  url: `/user/starred/${owner}/${repo}`,
  method: 'DELETE'
})
