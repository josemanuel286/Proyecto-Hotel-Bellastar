<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        section: 'Head'
      }
    },
    methods: {
      logout () {
        this.$store.commit('SET_USER', null)
        this.$store.commit('SET_TOKEN', null)
        localStorage.removeItem('user')
        localStorage.removeItem('token')

        if (window.localStorage) {
          window.localStorage.removeItem('user')
          window.localStorage.removeItem('token')
        }

        this.$router.push('./Login')
      }
    }
  }
</script>
