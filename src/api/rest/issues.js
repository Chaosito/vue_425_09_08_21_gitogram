import { makeRequest } from '../requests.js'

export const getIssues = ({ repo, owner }) => makeRequest({
  url: `/repos/${owner}/${repo}/issues`
})
