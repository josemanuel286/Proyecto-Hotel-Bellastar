<template>
  <section class="content">
    <div class="container-fluid">
      <!-- DataTales Example -->
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">
            Promociones habilitadas
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
                <th>Descripción</th>
                <th>Imagen</th>
                <th>Enlace</th>
                <th>Acciones</th>
              </thead>
                <tr v-for="record in records" :key="record.id">
                    <td>{{record.nombre_promocion}}</td>
                    <td>{{record.descripcion}}</td>
                    <td>{{record.promocion_image}}</td>
                    <td>{{record.restaurante_id}}</td>
                    <td> 
                    <button  @click="editarPromotion(record.id)">
                    Editar
                    </button>
                    </td>
                </tr>
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
    let url = 'https://apicodeword12.herokuapp.com/promociones/'
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
        console.log(data)
      })
      .catch((error) => console.log(error))
  },
  methods: {
    editarPromotion(id) {
      this.$router.push('./editarPromotions/' + id)
    }
  }
}
</script>

<style>
</style>
