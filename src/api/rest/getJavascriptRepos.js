import { makeRequest } from '../requests.js'

export const getJavascriptRepos = (id) => makeRequest({
  url: '/search/repositories',
  params: {
    order: 'desc',
    sort: 'start',
    q: 'language:javascript created:>2021-08-16',
    per_page: 10
  }
})
