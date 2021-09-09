import { shallowMount } from '@vue/test-utils'
import toggler from './toggler'

describe('Component: toggle', () => {
    it("onClick: Changes the text", async () => {
        const wrapper = shallowMount(toggler)
        expect(wrapper.find('.text').text()).toBe('View issues')
        await wrapper.find('button').trigger('click')
        expect(wrapper.find('.text').text()).toBe('Hide issues')
    })
})