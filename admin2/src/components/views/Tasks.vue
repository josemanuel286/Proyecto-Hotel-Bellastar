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
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

  </section>
</template>
<script>
      let url = 'https://apicodeword12.herokuapp.com/usuarios/'
      fetch(url)
            .then(response => response.json())
            .then(data => mostrarData(data))
            .catch(error => console.log(error))

      const mostrarData = (data) => {
        console.log(data.results)
        let body = ''
        for (let i = 0; i < data.results.length; i++) {
          body += `
                <tr><td>${data.results[i].name}</td>
                <td>${data.results[i].last_name}</td>
                <td>${data.results[i].contactmail}</td>
                <td>${data.results[i].cellphone}</td>
                <td> 
                <a id="editBtn" href="#"> <i class="fas fa-edit"></i> </a>
                <a id="deleteBtn" href="#"> <i class="fas fa-user-times"></i> </a>
                <a id="readBtn" href="#"> <i class="fas fa-eye"></i> </a></td> </tr>
                `
        }
        document.getElementById('data').innerHTML = body
      }
</script>

<style>

</style>
