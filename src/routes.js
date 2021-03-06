import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'
import EditarUsersView from './components/views/editarUsers.vue'
import EditarPromotionsView from './components/views/editarPromotions.vue'
import EditarBookingsView from './components/views/editarBookings.vue'
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
    path: 'Proyecto-Hotel-Bellastar/Dash/login',
    component: LoginView
  },
  {
    path: 'Proyecto-Hotel-Bellastar/',
    component: clientDashView
  },
  {
    path: 'Proyecto-Hotel-Bellastar/booking',
    component: bookingView
  },
  {
    path: 'Proyecto-Hotel-Bellastar/promotions',
    component: PromotionsClientView
  },
  {
    path: 'Proyecto-Hotel-Bellastar/Dash',
    component: DashView,
    children: [
      {
        path: 'Proyecto-Hotel-Bellastar/Dash/dashboard',
        alias: '',
        component: DashboardView,
        name: 'Dashboard',
        meta: {description: 'Overview of environment'}
      }, {
        path: 'Proyecto-Hotel-Bellastar/Dash/tables',
        component: TablesView,
        name: 'Tables',
        meta: {description: 'Simple and advance table in CoPilot'}
      }, {
        path: 'Proyecto-Hotel-Bellastar/Dash/users',
        component: UsersView,
        name: 'Users',
        meta: {description: 'tablas de usuarios'}
      }, {
        path: 'Proyecto-Hotel-Bellastar/Dash/promotions',
        component: PromotionsView,
        name: 'Promotions',
        meta: {description: 'tablas de promociones'}
      }, {
        path: 'Proyecto-Hotel-Bellastar/Dash/editarUsers/:idUser',
        component: EditarUsersView,
        name: 'editarUsers',
        meta: {description: 'tablas de editarUsers'}
      }, {
        path: 'Proyecto-Hotel-Bellastar/Dash/editarPromotions/:idPromotions',
        component: EditarPromotionsView,
        name: 'editarPromotions',
        meta: {description: 'tablas de editarPromotions'}
      }, {
        path: 'Proyecto-Hotel-Bellastar/Dash/editarBookings/:idBookings',
        component: EditarBookingsView,
        name: 'editarBookings',
        meta: {description: 'tablas de editarBookings'}
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
