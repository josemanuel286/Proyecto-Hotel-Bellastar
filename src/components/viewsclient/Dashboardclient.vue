<template>
    <section>
        <!-- Restaurants Section Star -->
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
                <li><a href="#tab1"><span class="fa fa-star"></span><span class="tab-text">ROSMARINO</span></a></li>
                <li><a href="#tab2"><span class="fa fa-cutlery"></span><span class="tab-text">PLATO F</span></a></li>

            </ul>
    
            <div class="secciones">
                <article id="tab1">
                   <h1>ROSMARINO</h1>
                    <p>Carnibal es un lugar para compartir momentos únicos. Es una experiencia gastronómica como ninguna otra. Deja volar tu imaginación con
                        deliciosos aromas y sabores. En Carnibal la innovación y la creatividad son las que nos guían cada día. Nuestro chef se esfuerza por 
                        crear exquisitos platos nuevos y emocionantes con algunos de los ingredientes más frescos y puros.</p>
                        <img src="img/restaurants/ceviches.jpg">
                        <br>
                        <div id="reservar">
                        <center><button type="button" class="btn btn-warning"><a href="booking.html">Reservar</a></button></center>
                        </div>
                </article>
                <article id="tab2">
                    <h1>Platillos Fuertes</h1>
                    <hr>
                    <p>SOPA DE MARISCOS<br>
                    Aceituna sin hueso marinadas con jugo de naranja, limon y especies.</p>
                    <p>CEVICHE<br>
                    Camarones fritos. sazonados con especies y harissa.</p>
                    <p>COCTEL DE CAMARÓN<br>
                    Albondigas de pescado con pimenton dulce y semillas de cilantro.</p>
                    <p>LANGOSTA<br>
                    Pasta suave de aceitunas negras y alcaparras, se acompaña con pan pita.</p>
                    <p>SOPA DE PESCADO<br>
                </article>
            </div>
        </div>
    </section>
</template>
<script>
$(document).ready(function(){
                fetch('https://jsonplaceholder.typicode.com/posts')
                            .then(
                                function(response){
                                    return response.json()
                                }
                            ).then(
                                function(data){
                                    let posts = data.map(function(i, e){
                                        return `
                                            <div>
                                                <h1>${i.title}</h1>
                                                <p>${i.body}</p>
                                            </div>
                                        `
                                    })
                                    $('#posts').html(posts)
                                }
                            ).catch(function(e){
                                $('#posts').html(`<p>${e}</p>`)
                            })

                $("#submitForm").click(async function(e){
                    e.preventDefault()
                    let usuario =  $("#usuario").val()
                    let password =  $("#password").val()
                    const json = await fetch('https://jsonplaceholder.typicode.com/users',{
                        method: 'POST',
                        body: JSON.stringify({
                            name: usuario,
                            username: password,
                        }),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        }
                    })
                    const data = await json.json()
                  alert('Se ha registrado correctamente con el ID: ' + data.id)
                })
})
        </script> -->
        <script>
            fetch('https://apicodeword12.herokuapp.com/restaurantes/1/')
            .then(response => response.json())
            .then(data => {
              let element = document.getElementById('tab1')
              element.innerHTML = `
                <h1> ${data.name_restaurant} </h1>
                <p> ${data.descripcion} </p>
                <img src ='${data.restaurant_image}' >
                `
            })
    </script>
