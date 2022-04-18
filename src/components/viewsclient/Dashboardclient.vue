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
                <li><a @click="mostrarRosmarinoFunc()"><span class="fa fa-star" style="color:yellow"></span><span style="color:yellow" class="tab-text">ROSMARINO</span></a></li>
                <li><a href="#tab2"><span class="fa fa-cutlery"></span><span class="tab-text">PLATO F</span></a></li>

            </ul>
    
            <div class="secciones">
                <article v-if="mostrarRosmarino" id="tab1">
                    <h1>Restaurante Rosmarino</h1>
                    <div v-for="record in records_menus" :key="record.id">
                        <div v-if="record.restaurante_id=== 'https://apicodeword12.herokuapp.com/restaurants/1/'">
                        <p>{{record.nombre_platillo}}</p>
                        <p>{{record.ingredientes}}</p>
                        </div>
                    </div>
                </article>
                <article id="tab2">
                    <h1>Platillos Fuertes</h1>
                    <div v-for="record in records_menus" :key="record.id">
                        <div v-if="record.restaurante_id=== 'https://apicodeword12.herokuapp.com/menus/1/'">
                        <p>{{record.nombre_platillo}}</p>
                        <p>{{record.ingredientes}}</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>

        <div class="wrap">
            <ul class="tabs">
                <li><a class="hov" @click="mostrarFrancesFunc()"></a><span class="fa fa-star"></span><span class="tab-text">Frances</span></a></li>
                <li><a @click="mostrarMenuFrancesFunc()"><span class="fa fa-cutlery"></span><span class="tab-text">PLATO F</span></a></li>
            </ul>
    
            <div class="secciones">
                <article id="tab3">
                    <h1>Restaurante Frances</h1>
                    <div v-for="record in records_menus" :key="record.id">
                        <div v-if="record.restaurante_id=== 'https://apicodeword12.herokuapp.com/restaurants/2/'">
                        <p>{{record.nombre_platillo}}</p>
                        <p>{{record.ingredientes}}</p>
                        </div>
                    </div>
                </article>
                <article v-if="mostrarMenuFrances" id="tab4">
                    <h1>Platillos Fuertes</h1>
                    <div v-for="record in records_menus" :key="record.id">
                        <div v-if="record.restaurante_id=== 'https://apicodeword12.herokuapp.com/menus/2/'">
                        <p>{{record.nombre_platillo}}</p>
                        <p>{{record.ingredientes}}</p>
                        </div>
                    </div>
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
  data: () => ({
    records_restaurants: [],
    records_menus: [],
    record: [],
    statusbool: false,
    mostrarRosmarino: true,
    mostrarMenuFrances: false
  }),
  components: {
    clientheader
  },
  mounted() {
    this.Restaurants()
    this.Menus()
  },
  methods: {
    booking() {
      this.$router.push('./booking')
    },
    Restaurants() {
      let url = 'https://apicodeword12.herokuapp.com/restaurants/'
      fetch(url, {
        method: 'Get',
        headers: {
          'Authorization': `${localStorage.getItem('token')}`,
          'Content-type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Request-Headers': 'text/plain'
        }})
        .then((response) => response.json())
        .then((data) => {
          this.records_restaurants = data
          console.log(data)
        })
        .catch((error) => console.log(error))
    },
    Menus() {
      let url = 'https://apicodeword12.herokuapp.com/menus/'
      fetch(url, {
        method: 'Get',
        headers: {
          'Authorization': `${localStorage.getItem('token')}`,
          'Content-type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Request-Headers': 'text/plain'
        }})
        .then((response) => response.json())
        .then((data) => {
          this.records_menus = data
          console.log(data)
        })
        .catch((error) => console.log(error))
    },
    mostrarMenuFrancesFunc() {
    },
    mostrarFrancesFunc() {
    },
    mostrarRosmarinoFunc: function() {
      this.mostrarRosmarino = !this.mostrarRosmarino
    }
  }

}
</script>
<style>
.hov:hover {
    color:aqua
}
@import url(../../../static/css/estilos.css);
</style>
