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
                                    <tbody id="requisicionesContent">
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
        name: 'index'

        , data() {
            return {

            }
        }


        , methods: {
                async firstDataLoad() {
                  const response = await requests.get(
                    'https://apicodeword12.herokuapp.com/booking/'
                    
                ) ;
                    let tbody = document.getElementById("requisicionesContent" ) ;
                    let items = response.data.data ;

                    for ( let i = 0 ; i <= items.length-1 ; i++ ) {

                        const tr = document.createElement("tr" ) ;

                        for ( let y = 0 ; y <= items[ i ].length-1 ; y++ ) {
                            const td = document.createElement("td" ) ;
                            td.innerHTML = items[ i ][ y ] ;
                            tr.appendChild( td ) ;
                        }

                        tbody.appendChild( tr ) ;
                    }

                    // $ ( '#requisicionesList' ).DataTable() ;
                    let x=1;

                    $ ( '#requisicionesList' ).DataTable( {
                        "processing": true,
                        "data": response.data.data
                        , "columns": [
                            {
                                data: 0
                                , render: function() {
                                    return x++ ;
                                }
                            }

                            , {
                                data: 1
                                , render: function( data ) {
                                    return data ;
                                }
                            }

                            , {
                                data: 2
                                , render: function( data ) {
                                    return data;
                                }
                            }

                            , {
                                data : 3
                                , render: function( data ) {
                                    return data ;
                                }
                            }

                            , {
                                data : 4
                                , render: function( data ) {
                                    return data ;
                                }
                            }

                            , {
                                data : 5
                                , render: function( data ) {
                                    return data ;
                                }
                            }

                            , {
                                data : 6
                                , render: function( data ) {
                                    return data ;
                                }
                            }

                            , {
                                data : 7
                                , render: function( data ) {
                                    return data ;
                                }
                            }

                            , {
                                data : 8
                                , render: function( data ) {
                                    return data
                                }
                            },
                            {
                                data:9
                                , render: function( data ) {
                                    return data ;
                                }
                            }

                        ]
                        , 'order': [ [ 0, 'desc' ] ]
                    }, ) ;
                }
                
        , created() {
            this.firstDataLoad() ;
        },}}
</script>

<style>

</style>
