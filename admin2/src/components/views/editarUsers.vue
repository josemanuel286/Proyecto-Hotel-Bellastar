<template>
  <section class="contact">
    <h1 class="title">Contacto</h1>
    <form action class="form">
      <label class="form-label" for="#name">Nombre</label>
      <input
        v-model="records.name"
        class="form-input"
        type="text"
        id="name"
        required
        placeholder="Nombre"
      />
      <label class="form-label" for="#last_name">Apellido</label>
      <input
        v-model="records.last_name"
        class="form-input"
        type="text"
        id="last_name"
        required
        placeholder="last_name"
      />
      <label class="form-label" for="#cellphone">Telefono</label>
      <input
        v-model="records.cellphone"
        class="form-input"
        type="text"
        id="cellphone"
        required
        placeholder="cellphone"
      />
      <label class="form-label" for="#username">Usuario</label>
      <input
        v-model="records.username"
        class="form-input"
        type="text"
        id="username"
        required
        placeholder="username"
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
    records: []
  }),
  mounted() {
    let id = this.$route.params.idUser
    let url = 'https://apicodeword12.herokuapp.com/users/' + id
    fetch(url, {
      method: 'Get',
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
        'Content-type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Request-Headers': 'text/plain'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        this.records = data
      })
      .catch((error) => console.log(error))
  },
  methods: {
    guardar() {
      let id = this.$route.params.idUser
      let url = 'https://apicodeword12.herokuapp.com/users/' + id
      const dataUser = {
        id: parseInt(id),
        name: this.records.name,
        last_name: this.records.last_name,
        cellphone: this.records.cellphone,
        username: this.records.username,
        email: this.records.email
      }
      fetch(url, {
        method: 'PUT',
        body: JSON.stringify(dataUser),
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
          'Content-type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Request-Headers': 'text/plain'
        }
      })
        .then((res) => res.json())
        .catch((error) => console.error('Error:', error))
        .then((response) => console.log('Success:', response))
      console.log(JSON.stringify(dataUser))
    }
  }
}
</script>
