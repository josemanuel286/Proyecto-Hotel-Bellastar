<template>
  <section class="content">
    
<div class="container-fluid">

                    <!-- DataTales Example -->
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Rosmarino Reservaciones</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
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
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

  </section>
</template>

<script>

      let url = 'https://apicodeword12.herokuapp.com/booking/'
      fetch(url)
            .then(response => response.json())
            .then(data => mostrarData(data))
            .catch(error => console.log(error))

      const mostrarData = (data) => {
        console.log(data.results)
        let body = ''
        for (let i = 0; i < data.results.length; i++) {
          body += `
                <tr><td>${data.results[i].nombre_usuario}</td>
                <td>${data.results[i].apellido_usuario}</td>
                <td>${data.results[i].telefono}</td>
                <td>${data.results[i].email}</td>
                <td>${data.results[i].dia_hora_booking}</td>
                <td>${data.results[i].solicitud_especial}</td>
                <td>${data.results[i].number_people}</td>
                <td>${data.results[i].restaurante_id}</td>
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
