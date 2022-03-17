<template>
    <div>
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <!-- Sidebar - Brand -->
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">Admin</div>
            </a>

            <!-- Divider -->
            <hr class="sidebar-divider my-0">

            <!-- Nav Item - Dashboard -->
            <li class="nav-item">
                <a class="nav-link" href="index.html">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider">

            <!-- Heading -->
            <div class="sidebar-heading">
                Interface
            </div>

            <!-- Nav Item - Restaurantes Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-utensils"></i>
                    <span>Restaurantes</span>
                </a>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Hotel Bellastar</h6>
                        <a class="collapse-item" href="carnivalBD.html">Rosmarin</a>
                        <a class="collapse-item" href="francesBD.html">Frances</a>
                        <a class="collapse-item" href="promociones.html">Promociones</a>
                    </div>
                </div>
            </li>
            <!-- Nav Item - menú Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Menú</span>
                </a>
                <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <div class="collapse-divider"></div>
                        <h6 class="collapse-header">Menú Bellastar</h6>
                        <a class="collapse-item" href="rosmarin.html">Rosmarin</a>
                        <a class="collapse-item" href="frances.html">Frances</a>
                    </div>
                </div>
            </li>

            <!-- Nav Item - Usuarios Menu -->
            <li class="nav-item">
                <a class="nav-link" href="usersBD.html">
                    <i class="fas fa-users"></i>
                    <span>Usuarios</span></a>
            </li>

            <!-- Divider -->
          <hr class="sidebar-divider">

            <!-- Divider -->

            <hr class="sidebar-divider d-none d-md-block">

            <!-- Sidebar Toggler (Sidebar) -->
            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>
    </div>
</template>

<style>
@import '@/assets/css/sb-admin-2.min.css';</style>