<template>
<div>
  <clientheader></clientheader>
 <div id="about">
   
            <div class="container">
                <div class="section-header">
                    <h1>Restaurantes En Cancún</h1>
                    <p>
                        Nuestros restaurantes de certificación.
                    </p>
                </div>  
        <div class="wrap">
            <ul class="tabs">
                <li><a href="#tab1"><span class="fa fa-star"></span><span class="tab-text">ROSMARINO</span></a></li>
                <li><a href="#tab2"><span class="fa fa-cutlery"></span><span class="tab-text">PLATO F</span></a></li>

            </ul>
    
            <div class="secciones">
                <article id="tab1">
                    
                   <!-- <h1>ROSMARINO</h1>

                    <p>Carnibal es un lugar para compartir momentos únicos. Es una experiencia gastronómica como ninguna otra. Deja volar tu imaginación con
                        deliciosos aromas y sabores. En Carnibal la innovación y la creatividad son las que nos guían cada día. Nuestro chef se esfuerza por 
                        crear exquisitos platos nuevos y emocionantes con algunos de los ingredientes más frescos y puros.</p>
    


                        <img src="img/restaurants/ceviches.jpg">
                        <br>
                        <div id="reservar">
                            <center><button type="button" class="btn btn-warning"><a href="booking.html">Reservar</a></button></center>
                        </div> -->

                </article>
                <article id="tab2">
                    <h1>Platillos Fuertes</h1>
                    <hr>
                    <p>SOPA DE MARISCOS<br>
                    Aceituna sin hueso marinadas con jugo de naranja, limon y especies.</p>
                    <p>CEVICHE<br>
                    Camarones fritos. sazonados con especies y harissa.</p>
                    <p>COCTEL DE CAMARÓN<br>
                    Albondigas de pescado con pimenton dulce y semillas de cilantro.</p>
                    <p>LANGOSTA<br>
                    Pasta suave de aceitunas negras y alcaparras, se acompaña con pan pita.</p>
                    <p>SOPA DE PESCADO<br></p>
                </article>
            </div>
        </div>

        <div class="wrap">
            <ul class="tabs">
                <li><a href="#tab3"><span class="fa fa-star"></span><span class="tab-text">PENDIENTE</span></a></li>
                <li><a href="#tab4"><span class="fa fa-cutlery"></span><span class="tab-text">PLATO F</span></a></li>
            </ul>
    
            <div class="secciones">
                <article id="tab3">
                    <h1>Restaurante Frances</h1>
                    <p>Carnibal es un lugar para compartir momentos únicos. Es una experiencia gastronómica como ninguna otra. Deja volar tu imaginación con
                        deliciosos aromas y sabores. En Carnibal la innovación y la creatividad son las que nos guían cada día. Nuestro chef se esfuerza por 
                        crear exquisitos platos nuevos y emocionantes con algunos de los ingredientes más frescos y puros.</p>

                        <!--<img src="img/restaurants/carnival.jpg">-->
                        <br>
                        <div id="reservar">
                            <center><button class="btn btn-warning" @click="booking()">Reservar</button></center>
                        </div>

                </article>
                <article id="tab4">
                    <h1>Platillos Fuertes</h1>
                    <hr>




                    <p>ACEITUNAS MARINADAS<br>
                    Aceituna sin hueso marinadas con jugo de naranja, limon y especies.</p>
                    <p>CREVETTES DE PROVENCE<br>
                    Camarones fritos. sazonados con especies y harissa.</p>
                    <p>KEFTDAKIA<br>
                    Albondigas de pescado con pimenton dulce y semillas de cilantro.</p>
                    <p>TAPENADE<br>
                    Pasta suave de aceitunas negras y alcaparras, se acompaña con pan pita.</p>
                    <p>TZATZIKI<br>
                    Crema suave de jocoque con eneldo, menta y pepino.</p>
                </article>
            </div>
        </div>
        </div>
        </div>
        </div>
</template>
<script>
import clientheader from './header.vue'
export default {
  components: {
    clientheader
  },
  methods: {
    booking() {
      this.$router.push('./booking')
    }
  }

}
</script>
<style>
@import url(../../../static/css/estilos.css);
</style>
