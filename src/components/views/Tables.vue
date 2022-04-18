<template>
  <section class="content">
    <div class="container-fluid">
      <!-- DataTales Example -->
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">
            ¿Reservaciones de restaurantes
          </h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Telefono</th>
                <th>Email</th>
                <th>Dia u Hora</th>
                <th>Solicitud especial</th>
                <th>Numero de Personas</th>
                <th>ID Restaurante</th>
                <th>Acciones</th>
              </thead>
              <tbody id="data">
                <tr v-for="record in records" :key="record.id">
                    <td>{{record.nombre_usuario}}</td>
                    <td>{{record.apellido_usuario}}</td>
                    <td>{{record.telefono}}</td>
                    <td>{{record.email}}</td>
                    <td>{{record.dia_hora_booking}}</td>
                    <td>{{record.solicitud_especial}}</td>
                    <td>{{record.number_people}}</td>
                    <div v-if="record.restaurante_id=== 'https://apicodeword12.herokuapp.com/restaurants/2/'">
                      <td>Frances</td>
                    </div>
                    <div v-else-if="record.restaurante_id=== 'https://apicodeword12.herokuapp.com/restaurants/1/'">
                      <td>Carnival</td>
                    </div>
                    <td>
                    <button class="btn btn-success" @click="editarUser(record.id)">
                    Editar
                    </button>
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      records: []
    }
  },
  mounted() {
    let user = localStorage.getItem('user')
    if (user) {
      let url = 'https://apicodeword12.herokuapp.com/bookings/'
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
        this.records = data
        console.log(user)
        console.log(localStorage.getItem('user'))
      })
      .catch((error) => console.log(error))
    } else {
      this.$router.push('../Login')
      console.log(user)
      console.log(localStorage.getItem('user'))
    }
  },
  methods: {
    editarUser(id) {
      this.$router.push('./editarBookings/' + id)
    }
  }
}
</script>

<style>
</style>
