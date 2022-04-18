<template>
    <section>
<h1 class="title">Contacto</h1>
    <form action class="form">
      <label class="form-label" for="nombre_usuario">Nombre</label>
      <input
        v-model="records.nombre_usuario"
        class="form-input"
        type="text"
        id="nombre_usuario"
        required
        placeholder=""
      />
      <label class="form-label" for="apellido_usuario">Apellido</label>
      <input
        v-model="records.apellido_usuario"
        class="form-input"
        type="text"
        id="apellido_usuario"
        required
        placeholder=""
      />
      <label class="form-label" for="telefono">Telefono</label>
      <input
        v-model="records.telefono"
        class="form-input"
        type="text"
        id="telefono"
        required
        placeholder=""
      /><br>
      <label class="form-label" for="email">Email</label>
      <input
        v-model="records.email"
        class="form-input"
        type="email"
        id="email"
        placeholder=""
      />
      <label class="form-label" for="dia_hora_booking">Dia y hora</label>
      <input
        v-model="records.dia_hora_booking"
        class="form-input"
        type="dia_hora_booking"
        id="dia_hora_booking"
        placeholder=""
      />
      <label class="form-label" for="solicitud_especial">Solicitud Especial</label>
      <input
        v-model="records.solicitud_especial"
        class="form-input"
        type="solicitud_especial"
        id="solicitud_especial"
        placeholder=""
      />
      <label class="form-label" for="number_people">numero de personas</label>
      <input
        v-model="records.number_people"
        class="form-input"
        type="number_people"
        id="number_people"
        placeholder=""
      />
      <label class="form-label" for="restaurante_id">Id</label>
      <input
        v-model="records.restaurante_id"
        class="form-input"
        type="restaurante_id"
        id="restaurante_id"
        placeholder=""
      />
      <label class="form-label" for="status">Status</label>
      <input
        id="status"
        type="checkbox"
        class=""
        :checked="this.statusbool"
        v-model ="statusbool"
      ><br>
      <br>
      <button class="btn btn-success" @click="guardar()" value="Guardar">Guardar</button>
      <button class="btn btn-danger" @click="cancelar()" value="Cancelar">Cancelar</button>
    </form>
    </section>
</template>
<script>
export default {
  data: () => ({
    records: [],
    statusbool: false
  }),
  mounted() {
    let id = this.$route.params.idBookings
    let url = 'https://apicodeword12.herokuapp.com/bookings/' + id
    fetch(url, {
      method: 'Get',
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
        'Content-type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Request-Headers': 'text/plain'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        this.records = data
        this.statusbool = this.records.status === 1
      })
      .catch((error) => console.log(error))

    //  this.statusbool = this.records.status === 1 || this.records.status === 2
    //  console.log(this.statusbool)
  },
  methods: {
    guardar() {
      let st = this.statusbool === true ? 1 : 2
      let id = this.$route.params.idBookings
      let url = 'https://apicodeword12.herokuapp.com/bookings/' + id + '/'
      const dataRestaurants = {
        nombre_usuario: this.records.nombre_usuario,
        apellido_usuario: this.records.apellido_usuario,
        telefono: parseInt(this.records.telefono),
        email: this.records.email,
        dia_hora_booking: this.records.dia_hora_booking,
        solicitud_especial: this.records.solicitud_especial,
        number_people: this.records.number_people,
        restaurante_id: this.records.restaurante_id,
        status: st
      }
      fetch(url, {
        method: 'PUT',
        body: JSON.stringify(dataRestaurants),
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
          'Content-type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Request-Headers': 'text/plain'
        }
      })
        .then((res) => res.json())
    },
    cancelar() {
      this.$router.push('../Tables')
    }
  }
}
</script>
