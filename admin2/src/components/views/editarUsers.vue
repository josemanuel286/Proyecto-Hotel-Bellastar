<template>
  <div class="contact">
    <h1 class="title">Contacto</h1>
    <form action class="form" @submit.prevent="contact">
      <label class="form-label" for="#name">Nombre</label>
      <input
        v-model="name"
        class="form-input"
        type="text"
        id="name"
        required
        placeholder="Nombre"
      />
      <label class="form-label" for="#name">Apellido</label>
      <input
        v-model="name"
        class="form-input"
        type="text"
        id="name"
        required
        placeholder="Nombre"
      />
      <label class="form-label" for="#name">Telefono</label>
      <input
        v-model="name"
        class="form-input"
        type="text"
        id="name"
        required
        placeholder="Nombre"
      />
      <label class="form-label" for="#name">Usuario</label>
      <input
        v-model="name"
        class="form-input"
        type="text"
        id="name"
        required
        placeholder="Nombre"
      />
      <label class="form-label" for="#email">Email</label>
      <input
        v-model="email"
        class="form-input"
        type="email"
        id="email"
        placeholder="Email"
      />
      <input class="form-submit" type="submit" value="Contactar" />
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: '',
    email: ''
  }),
  methods: {
    contact() {
      console.log(this.name)
      console.log(this.email)
    }
  }
}
</script>
