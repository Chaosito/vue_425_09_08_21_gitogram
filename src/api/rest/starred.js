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

export const likeRepo = ({ repo, owner }) => makeRequest({
  url: `/user/starred/${owner}/${repo}`,
  method: 'PUT'
})

export const dislikeRepo = ({ repo, owner }) => makeRequest({
  url: `/user/starred/${owner}/${repo}`,
  method: 'DELETE'
})
