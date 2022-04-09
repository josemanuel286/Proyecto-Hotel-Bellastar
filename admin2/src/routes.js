import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import DashboardView from './components/views/Dashboard.vue'
import TablesView from './components/views/Tables.vue'
import UsersView from './components/views/Users.vue'
import PromotionsView from './components/views/Promotions.vue'
import EditarUsersView from './components/views/editarUsers.vue'

// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
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
      }, {
        path: 'EditatUsers',
        component: EditarUsersView,
        name: 'editarusers',
        meta: {description: 'tablas de usuario'}
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
