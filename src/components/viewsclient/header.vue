<template>
    <section>
        <header id="header">
            <a href="https://api.whatsapp.com/send/?phone=5219982422755&text&app_absent=0"><div class="phone"><i class="fa fa-phone"></i>+52 1 998 242 2755</div></a>
            <div class="mobile-menu-btn"><i class="fa fa-bars"></i></div>
            <nav class="main-menu top-menu">
                <ul>
                    <router-link tag="li" class="pageLink" to="./">
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
#booking{
    background-color:  #f2f2f2;
}
</style>
