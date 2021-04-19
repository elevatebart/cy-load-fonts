import { mount } from "@cypress/vue"
import HelloWorld from './HelloWorld.vue'

describe("<HelloWorld />", () => {
    it('should mount', () => {
        mount(HelloWorld)
    })
})