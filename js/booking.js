/*$('#submitForm').click(async function(e){
    e.preventDefault()
    let nombre_usuario = $('fname').val();
    let apellido_usuario = $('lname').val();
    let telefono = $('mobile').val();
    let email = $('email').val();
    let dia_hora_booking = $('datetime').val();
    let solicitud_especial = $('request').val();
    let number_people = $('number_people').val();
    let restaurante_id = $('Rselection').val();

    const json = await fetch('https://apicodeword12.herokuapp.com/booking/',{

        method: 'POST',
        body: JSON.stringify({
            nombre_usuario: nombre_usuario,
            apellido_usuario: apellido_usuario,
            telefono: telefono,
            email: email,
            dia_hora_booking: dia_hora_booking,
            solicitud_especial: solicitud_especial,
            number_people: number_people,
            restaurante_id: restaurante_id,
        })
        })
        const data = await json.json()
    alert('Se ha registrado correctamente con el ID: ' + data.id )
})*/

$(function () { 

    $("#bookingForm input").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
        },
        submitSuccess: function ($form, event) {
            event.preventDefault();
            var nombre_usuario = $("input#fname").val();
            var apellido_usuario = $("input#lname").val();
            var name = fname + ' ' + lname;
            var telefono = $("input#mobile").val();
            var email = $("input#email").val();
            var dia_hora_booking = $("input#datetime").val();
            var date_2 = $("input#date-2").val();
            var time_1 = $("input#time-1").val();
            var time_2 = $("input#time-2").val();
            var solicitud_especial = $("input#request").val();
            var number_people = $("select#number_people").val();
            var restaurante_id = $("select#Rselection").val();
            

            $this = $("#bookingButton");
            $this.prop("disabled", true);
            
           $.ajax({
                url: "https://apicodeword12.herokuapp.com/booking/",
                type: "POST",
                data: {
                    nombre_usuario: nombre_usuario,
                    apellido_usuario: apellido_usuario,
                    telefono: telefono,
                    email: email,
                    dia_hora_booking: dia_hora_booking, 
                    solicitud_especial: solicitud_especial,
                    number_people: number_people,
                    restaurante_id: restaurante_id,
                    
                }, 


                cache: false,
                success: function () {
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                    $('#success > .alert-success')
                            .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                            .append('</div>');
                    $('#bookingForm').trigger("reset");
                },
                error: function () {
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                    $('#success > .alert-danger').append($("<strong>").text("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"));
                    $('#success > .alert-danger').append('</div>');
                    $('#bookingForm').trigger("reset");
                },
                complete: function () {
                    setTimeout(function () {
                        $this.prop("disabled", false);
                    }, 1000);
                }
            });
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('#name').focus(function () {
    $('#success').html('');
});
