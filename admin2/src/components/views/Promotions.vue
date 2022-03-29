<template>
  <section class="content">
    <div class="container-fluid">
      <!-- DataTales Example -->
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">
            Rosmarino Reservaciones
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
                <th>Acciones</th>
              </thead>
                <tr v-for="record in records" :key="record.id">
                    <td>{{record.nombre_promocion}}</td>
                    <td>{{record.descripcion}}</td>
                    <td>{{record.promocion_image}}</td>
                    <td>{{record.restaurante_id}}</td>
                    <td> 
                    <a id="editBtn" href="#"> <i class="fas fa-edit"></i> </a>
                    <a id="deleteBtn" href="#"> <i class="fas fa-user-times"></i> </a>
                    <a id="readBtn" href="#"> <i class="fas fa-eye"></i> </a></td>
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
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.records = data.results
      })
      .catch((error) => console.log(error))
  }
}

</script>

<style>
</style>
