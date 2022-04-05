/*
import {createWebHistory, createRouter} from 'vue-router'
import exports from 'webpack';
import Login from '../components/Login.vue' 

const routes = [
    {
        path: '/login',
        name: 'loigin',
        component: LoginView
      },  {
        path: '/',
        component: DashView,
        children: [
          {
            path: 'dashboard',
            alias: '',
            component: DashboardView,
            name: 'Dashboard',
            meta: {description: 'Overview of environment'}
          }, {
            path: 'tables',
            component: TablesView,
            name: 'Tables',
            meta: {description: 'Simple and advance table in CoPilot'}
          }, {
            path: 'users',
            component: UsersView,
            name: 'Users',
            meta: {description: 'tablas de usuarios'}
          }, {
            path: 'promotions',
            component: PromotionsView,
            name: 'Promotions',
            meta: {description: 'tablas de promociones'}
          }
        ]
      },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
*/