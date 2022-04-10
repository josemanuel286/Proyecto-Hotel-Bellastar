<template>
  <section class="contact">
    <h1 class="title">Contacto</h1>
    <form action class="form" @submit.prevent="contact">
      <label class="form-label" for="#name">Nombre</label>
      <input
        v-model="records.name"
        class="form-input"
        type="text"
        id="name"
        required
        placeholder="Nombre"
      />
      <label class="form-label" for="#name">Apellido</label>
      <input
        v-model="records.last_name"
        class="form-input"
        type="text"
        id="name"
        required
        placeholder="Nombre"
      />
      <label class="form-label" for="#name">Telefono</label>
      <input
        v-model="records.cellphone"
        class="form-input"
        type="text"
        id="name"
        required
        placeholder="Nombre"
      />
      <label class="form-label" for="#name">Usuario</label>
      <input
        v-model="records.username"
        class="form-input"
        type="text"
        id="name"
        required
        placeholder="Nombre"
      />
      <label class="form-label" for="#email">Email</label>
      <input
        v-model="records.email"
        class="form-input"
        type="email"
        id="email"
        placeholder="Email"
      />
      <button @click="guardar()" value="Guardar" />
      <button @click="cancelar()" value="Cancelar" />
    </form>
  </section>
</template>

<script>
export default {
  data: () => ({
    name: '',
    email: ''
  }),
  mounted() {
    let id = this.$route.params.idUser
    let url = 'https://apicodeword12.herokuapp.com/users/' + id
    console.log(id)
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
    contact() {
      console.log(this.name)
      console.log(this.email)
    }
  }
}
</script>

