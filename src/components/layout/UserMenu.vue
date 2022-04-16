<template>
<div id="menu">
<button @click="logout()">logout</button>
</div>
</template>

<script>
export default {
  name: 'UserMenu',
  props: ['user'],
  methods: {
    logout() {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      this.$router.push('../Login')
    }
  }
}
</script>
