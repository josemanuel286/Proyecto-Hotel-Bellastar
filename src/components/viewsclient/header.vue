<template>
    <section>
        <header id="header">
            <div class="phone"><i class="fa fa-phone"></i>+52 1 998 242 2755</div>
            <div class="mobile-menu-btn"><i class="fa fa-bars"></i></div>
            <nav class="main-menu top-menu">
                <ul>
                    <router-link tag="li" class="pageLink" to="./Dashboardclient">
                     <a >Restaurantes</a> </router-link>
                    <router-link tag="li" class="pageLink" to="./booking">
                     <a >Reservaciones</a> </router-link>
                    <li><a href="./promotions">Promociones</a></li>
                </ul>
            </nav>
        </header>
    </section>
</template>
<script>

export default {
  name: 'clientheader'
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900');
@import url(../../../static/css/style.css);
#booking{
    background-color: aliceblue;
}
</style>
