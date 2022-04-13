<template>
  <section class="contact">
    <h1 class="title">Contacto</h1>
    <form action class="form">
      <label class="form-label" for="nombre_promocion">Nombre</label>
      <input
        v-model="records.nombre_promocion"
        class="form-input"
        type="text"
        id="nombre_promocion"
        required
        placeholder=""
      />
      <label class="form-label" for="descripcion">Descripción</label>
      <input
        v-model="records.descripcion"
        class="form-input"
        type="text"
        id="descripcion"
        required
        placeholder=""
      />
      <label class="form-label" for="promocion_image">Imagen</label>
      <input
        v-model="records.promocion_image"
        class="form-input"
        type="text"
        id="promocion_image"
        required
        placeholder=""
      />
      <label class="form-label" for="restaurante_id">ID</label>
      <input
        v-model="records.restaurante_id"
        class="form-input"
        type="text"
        id="restaurante_id"
        required
        placeholder=""
      />
      <label class="form-label" for="status">Status</label>
      <input
        id="status"
        type="checkbox"
        class=""
        :checked="this.statusbool"
        v-model ="statusbool"
      >
      <button @click="guardar()" value="Guardar" />
      <button @click="cancelar()" value="Cancelar" />
    </form>
  </section>
</template>
<script>
export default {
  data: () => ({
    records: [],
    statusbool: false
  }),
  mounted() {
    let id = this.$route.params.idUser
    let url = 'https://apicodeword12.herokuapp.com/promociones/' + id
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
        this.statusbool = this.records.status === 1
      })
      .catch((error) => console.log(error))

    //  this.statusbool = this.records.status === 1 || this.records.status === 2
    //  console.log(this.statusbool)
  },
  methods: {
    guardar() {
      let st = this.statusbool === true ? 1 : 2
      let id = this.$route.params.idPromotions
      let url = 'https://apicodeword12.herokuapp.com/promociones/' + id + '/'
      const dataPromotion = {
        nombre_promocion: this.records.nombre_promocion,
        descripcion: this.records.descripcion,
        promocion_image: parseInt(this.records.promocion_image),
        restaurante_id: this.records.restaurante_id,
        status: st
      }
      fetch(url, {
        method: 'PUT',
        body: JSON.stringify(dataPromotion),
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
          'Content-type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Request-Headers': 'text/plain'
        }
      })
        .then((res) => res.json())
    },
    cancelar() {
      this.$router.push('../Promotions')
    }
  }
}
</script>
