import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'
import EditarUsersView from './components/views/editarUsers.vue'
import EditarPromotionsView from './components/views/editarPromotions.vue'
import EditarRestaurantsView from './components/views/editarRestaurants.vue'
// Import Views - Dash
import DashboardView from './components/views/Dashboard.vue'
import TablesView from './components/views/Tables.vue'
import UsersView from './components/views/Users.vue'
import PromotionsView from './components/views/Promotions.vue'
import bookingView from './components/viewsclient/booking.vue'
import clientDashView from './components/viewsclient/Dashboardclient.vue'
import PromotionsClientView from './components/viewsclient/promotions.vue'
// Routes
const routes = [
  {
    path: '/Dash/login',
    component: LoginView
  },
  {
    path: '/',
    component: clientDashView
  },
  {
    path: '/booking',
    component: bookingView
  },
  {
    path: '/promotions',
    component: PromotionsClientView
  },
  {
    path: '/Dash',
    component: DashView,
    children: [
      {
        path: '/Dash/dashboard',
        alias: '',
        component: DashboardView,
        name: 'Dashboard',
        meta: {description: 'Overview of environment'}
      }, {
        path: '/Dash/tables',
        component: TablesView,
        name: 'Tables',
        meta: {description: 'Simple and advance table in CoPilot'}
      }, {
        path: '/Dash/users',
        component: UsersView,
        name: 'Users',
        meta: {description: 'tablas de usuarios'}
      }, {
        path: '/Dash/promotions',
        component: PromotionsView,
        name: 'Promotions',
        meta: {description: 'tablas de promociones'}
      }, {
        path: '/Dash/editarUsers/:idUser',
        component: EditarUsersView,
        name: 'editarUsers',
        meta: {description: 'tablas de editarUsers'}
      }, {
        path: '/Dash/editarPromotions/:idPromotions',
        component: EditarPromotionsView,
        name: 'editarPromotions',
        meta: {description: 'tablas de editarPromotions'}
      }, {
        path: '/Dash/editarRestaurants/:idRestaurants',
        component: EditarRestaurantsView,
        name: 'editarRestaurants',
        meta: {description: 'tablas de editarReservaciones'}
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
