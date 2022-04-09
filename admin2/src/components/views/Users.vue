<template>
  <section class="content">
    
<div class="container-fluid">

                    <!-- DataTales Example -->
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Usuarios</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                            <th>Nombre</th>
                                            <th>Apellido</th>
                                            <th>Correo</th>
                                            <th>Contacto</th>
                                            <th>Acciones</th>
                                        
                                    </thead>
                                    <tbody id="data">
                                      <tr v-for="record in records" :key="record.id">
                                          <td>{{record.name}}</td>
                                          <td>{{record.last_name}}</td>
                                          <td>{{record.email}}</td>
                                          <td>{{record.cellphone}}</td>
                                          <td> 
                                          <div v-if="record.status=== 1">
                                            <a id="status" style="color:green">Activo</a>
                                          </div>
                                          <div v-else-if="record.status=== 2">
                                            <a id="status" style="color:red">inactivo</a>
                                          </div>
                                          <router-link  to="./editarUsers.vue">
                                            <a>
                                              <span class="page">Editar</span>
                                            </a>
                                          </router-link>
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
    let url = 'https://apicodeword12.herokuapp.com/users/'
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
  }
}
</script>
