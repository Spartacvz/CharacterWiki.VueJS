import Router from 'vue-router'

import PullCharacter from 'client/src/components/PullCharacter.vue'

export default new Router({
    routes: [
        {
            path: '/',
            component: PullCharacter
        }
    ]
})