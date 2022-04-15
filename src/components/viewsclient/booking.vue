<template>
    <section>
<div id="booking">
            <div class="container">
                <div class="section-header">
                    <h2>Reservaciones</h2>
                    <p>
                        Reserva en tu restaurante favorito.
                    </p>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="booking-form" id="myForm">
                            <div id="success"></div>
                            <form name="sentMessage" id="bookingForm" novalidate="novalidate">
                                <div class="form-row">
                                    <div class="control-group col-md-6">
                                        <label>Nombre</label>
                                        <input type="text" class="form-control" id="fname" placeholder="E.g. John" required="required" data-validation-required-message="Please enter first name" />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="control-group col-md-6">
                                        <label>Apellido</label>
                                        <input type="text" class="form-control" id="lname" placeholder="E.g. Sina" required="required" data-validation-required-message="Please enter last name" />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="control-group col-md-6">
                                        <label>Telefono</label>
                                        <input type="text" class="form-control" id="mobile" placeholder="E.g. +1 234 567 8900" required="required" data-validation-required-message="Please enter your mobile number" />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="control-group col-md-6">
                                        <label>Correo Electronico</label>
                                        <input type="email" class="form-control" id="email" placeholder="E.g. email@example.com" required="required" data-validation-required-message="Please enter your email" />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="control-group col-md-6">
                                        <label>Dia y hora de reservación</label><br>
                                        <input type="datetime-local" id="datetime">
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="control-group col-md-3">
                                        <label>Selecciona tu restaurante</label><br>
                                        <select id="Rselection">
                                            <option value="0">selecciona</option>
                                            <option value="https://apicodeword12.herokuapp.com/restaurantes/1/">Rosmarin</option>
                                            <option value="https://apicodeword12.herokuapp.com/restaurantes/2/">Frances</option>
                                        </select>
                                    </div>
                                    <div class="control-group col-md-3">
                                        <label>Número de Personas</label><br>
                                        <select id="number_people">
                                            <option value="0">selecciona</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label>Solicitud especial</label>
                                    <input type="text" class="form-control" id="request" placeholder="E.g. Special Request" required="required" data-validation-required-message="Please enter your special request" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="button"><button type="submit" id="bookingButton">Book Now</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Booking Section End -->
    </section>
</template>
<script></script>
