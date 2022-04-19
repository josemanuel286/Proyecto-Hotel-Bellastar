<template>
  <ul class="sidebar-menu">
    <li class="header">TOOLS</li>
    <router-link tag="li" class="pageLink" to="/Dash">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">Inicio</span>
      </a>
    </router-link>

    <router-link tag="li" class="pageLink" to="/Dash/tables">
      <a>
        <i class="fa fa-table"></i>
        <span class="page">Restaurantes</span>
      </a>
    </router-link>
        <router-link tag="li" class="pageLink" to="/Dash/promotions">
      <a>
        <i class="fa fa-table"></i>
        <span class="page">Promociones</span>
      </a>
    </router-link>

    <li class="header">Administrador</li>
    <router-link tag="li" class="pageLink" to="/Dash/users">
      <a>
        <i class="fa fa-tasks"></i>
        <span class="page">Usuarios</span>
      </a>
    </router-link>

    <li class="header">PAGES</li>
    <router-link tag="li" class="pageLink" to="/Dash/login">
      <a>
        <i class="fa fa-circle-o text-yellow"></i>
        <span class="page"> Login</span>
      </a>
    </router-link>
  </ul>
</template>
<script>
export default {
  name: 'SidebarMenu'
}
</script>
<style>
/* override default */
.sidebar-menu > li > a {
  padding: 12px 15px 12px 15px;
}

.sidebar-menu li.active > a > .fa-angle-left,
.sidebar-menu li.active > a > .pull-right-container > .fa-angle-left {
  animation-name: rotate;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
}

.treeview-title {
  z-index: 1;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-90deg);
  }
}
</style>
