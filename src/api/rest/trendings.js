import { makeRequest, addZeroes } from '../requests.js'

const millsecondsInWeek = 7 * 24 * 60 * 60 * 1000
const weekAgo = new Date(Date.now() - millsecondsInWeek)

const dtWeekAgo = [
  weekAgo.getFullYear(),
  addZeroes(weekAgo.getMonth() + 1),
  addZeroes(weekAgo.getDate())
].join('-')

export const getTrendings = (lang = 'javascript') => makeRequest({
  url: '/search/repositories',
  params: {
    order: 'desc',
    sort: 'start',
    q: `language:${lang} created:>${dtWeekAgo}`,
    per_page: 10
  }
})
