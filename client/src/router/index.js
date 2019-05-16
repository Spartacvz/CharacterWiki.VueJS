import Router from 'vue-router'

import Home from '@/components/Home'
import Header from '@/components/Header'
import PullCharacter from '@/components/PullCharacter'
import sideBarMenu from "@/components/sideBarMenu"


export default new Router({
    routes: [
        {
            path: '@/components/Home',
            component: Home
        },
        {
            path: '@/components/Header',
            component: Header
        },
        {
            path: '@/components/sideBarMenu',
            component: sideBarMenu
        },
        {
            path: '@/PullCharacter/:character',
            name: 'PullCharacter',
            component: PullCharacter
        }
    ]
})