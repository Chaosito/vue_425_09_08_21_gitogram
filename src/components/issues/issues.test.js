import { mount } from '@vue/test-utils'
import issues from './issues'

describe('Component: issues', () => {
  it('onClick: Changes the text View\\Hide', async () => {
    const wrapper = mount(issues)
    expect(wrapper.find('.text').text()).toBe('View issues')
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('.text').text()).toBe('Hide issues')
  })

  it('emit: loadContent runned when click view issues only', async () => {
    const wrapper = mount(issues)
    await wrapper.find('.toggler button').trigger('click')
    await wrapper.find('.toggler button').trigger('click')
    await wrapper.find('.toggler button').trigger('click')
    expect(wrapper.emitted().loadContent.length).toBe(2)
  })

  it('Draw list of elemets', async () => {
    const issue = {
      title: 'title',
      user: {
        login: 'user-login'
      }
    }
    const wrapper = mount(issues, {
      propsData: {
        //   issues: [issue, issue]
        issues: Array.from({ length: 6 }).map(x => issue)
      }
    })

    expect(wrapper.findAll('.comment-item').length).toBe(0)
    expect(wrapper.find('.comments').exists()).toBe(false)
    await wrapper.find('.toggler button').trigger('click')
    expect(wrapper.find('.comments').exists()).toBe(true)
    expect(wrapper.findAll('.comment-item').length).toBe(6)
  })

  it('No call emit loadContent, when data is loaded', async () => {
    const issue = {
      title: 'title',
      user: {
        login: 'user-login'
      }
    }
    const wrapper = mount(issues, {
      propsData: {
        issues: Array.from({ length: 1 }).map(x => issue)
      }
    })
    await wrapper.find('.toggler button').trigger('click')
    expect(wrapper.emitted().loadContent).toBeUndefined()
  })

  it('Loading shown', async () => {
    const wrapper = mount(issues, {
      propsData: {
        loading: true
      }
    })
    expect(wrapper.find('.c-loader .placeholder').exists()).toBe(false)
    await wrapper.find('.toggler button').trigger('click')
    expect(wrapper.find('.c-loader .placeholder').exists()).toBe(true)
  })
})
