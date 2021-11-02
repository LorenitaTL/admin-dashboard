

export default {

    name: 'admin',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/dashboard/layouts/AdminDashboard.vue'),
    children: [
        {
            path: '',
            name: 'admin-list',
            component: () => import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/dashboard/views/AdminTable.vue'),
        },
        {
            path: 'new-admin',
            name: 'new-admin',
            component: () => import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/dashboard/views/AddAdmin.vue'),
        },
        {
            path: 'edit-admin/:id',
            name: 'edit-admin',
            component: () => import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/dashboard/views/EditAdmin.vue'),
            props: (route) => {
                return {
                    id: route.params.id
                }
            }
        },
        {
            path: ':id',
            name: 'admin-details',
            component: () => import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/dashboard/views/AdminProfile.vue'),
            props: (route) => {
                return {
                    id: route.params.id
                }
            }
        },
        {
            path: 'success',
            name: 'success',
            component: () => import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/dashboard/views/Success.vue'),
        },
    ]

}