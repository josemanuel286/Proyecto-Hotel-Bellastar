<template>
<div>
    <clientheader></clientheader>
    <section>
        
        <div id="booking">
            <div class="container">
                <div class="section-header">
                    <h2>Reservaciones</h2>
                    <p>
                        Reserva en tu restaurante favorito.
                    </p>
                </div>
                <div class="row justify-content-start">
                    <div class="col-md-12">
                        <div class="booking-form" id="myForm">
                            <div id="success"></div>
                            <form name="sentMessage" id="bookingForm" novalidate="novalidate">
                                <div class="form-row">
                                    <div class="control-group col-md-6">
                                        <label>Nombre</label>
                                        <input v-model="records.nombre_usuario" type="text" class="form-control" id="fname" placeholder="E.g. John" required="required" data-validation-required-message="Please enter first name" />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="control-group col-md-6">
                                        <label>Apellido</label>
                                        <input v-model="records.apellido_usuario" type="text" class="form-control" id="lname" placeholder="E.g. Sina" required="required" data-validation-required-message="Please enter last name" />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="control-group col-md-6">
                                        <label>Telefono</label>
                                        <input v-model="records.telefono" type="text" class="form-control" id="mobile" placeholder="E.g. +1 234 567 8900" required="required" data-validation-required-message="Please enter your mobile number" />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="control-group col-md-6">
                                        <label>Correo Electronico</label>
                                        <input v-model="records.email" type="email" class="form-control" id="email" placeholder="E.g. email@example.com" required="required" data-validation-required-message="Please enter your email" />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="control-group col-md-6">
                                        <label>Dia y hora de reservación</label><br>
                                        <input v-model="records.dia_hora_booking" type="datetime-local" id="datetime">
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="control-group col-md-3">
                                        <label>Selecciona tu restaurante</label><br>
                                        <select id="Rselection" v-model="records.restaurante_id">
                                            <option value="https://apicodeword12.herokuapp.com/restaurants/1/">selecciona</option>
                                            <option value="https://apicodeword12.herokuapp.com/restaurants/1/">Rosmarin</option>
                                            <option value="https://apicodeword12.herokuapp.com/restaurants/2/">Frances</option>
                                        </select>
                                    </div>
                                    <div class="control-group col-md-3">
                                        <label>Número de Personas</label><br>
                                        <select id="number_people" v-model="records.number_people">
                                            <option value="1">selecciona</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label>Solicitud especial</label>
                                    <input v-model="records.solicitud_especial" type="text" class="form-control" id="request" placeholder="E.g. Special Request" required="required" data-validation-required-message="Please enter your special request" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="button"><button @click="guardar()" id="bookingButton">Book Now</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Booking Section End -->
    </section>
    </div>
</template>
<script>
import clientheader from './header.vue'
export default {
  data: () => ({
    records: [],
    statusbool: false
  }),
  components: {
    clientheader
  },
  methods: {
    guardar() {
      let url = 'https://apicodeword12.herokuapp.com/bookings/'
      const dataRestaurants = {
        nombre_usuario: this.records.nombre_usuario,
        apellido_usuario: this.records.apellido_usuario,
        telefono: parseInt(this.records.telefono),
        email: this.records.email,
        dia_hora_booking: this.records.dia_hora_booking,
        solicitud_especial: this.records.solicitud_especial,
        number_people: parseInt(this.records.number_people),
        restaurante_id: this.records.restaurante_id,
        status: 1
      }
      console.log(dataRestaurants)
      fetch(url, {
        method: 'Post',
        body: JSON.stringify(dataRestaurants),
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
          'Content-type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Request-Headers': 'text/plain'
        }
      })
        .then((res) => res.json())
    }
  }
}
</script>

<style>
@import url(../../../static/css/style.css);
@import url(../../../static/vendor/bootstrap/css/bootstrap.min.css);
#booking{
    background-color: #f2f2f2;
};
#bookingform{
    padding:0%
};
</style>

