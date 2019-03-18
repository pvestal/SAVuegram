import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Profile from '@/components/Profile'
import readme from '@/components/InstallReadMe'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '*',
			redirect: '/dashboard'
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		},
        {
			path: '/dashboard',
			name: 'Dashboard',
			component: Dashboard,
            meta: {
                requiresAuth: true
            }
		},
        {
			path: '/profile',
			name: 'Profile',
			component: Profile,
            meta: {
                requiresAuth: true
            }
		},
		{
			path: '/readme',
			name: 'readme',
			component: readme,
		}
	]
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const currentUser = firebase.auth().currentUser

    if (requiresAuth && !currentUser) {
        next('/login')
    } else if (requiresAuth && currentUser) {
        next()
    } else {
        next()
    }
})

export default router
