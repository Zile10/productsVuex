<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Surname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product">
        <td>{{ product.id }}</td>
        <td>{{ product.firstName }}</td>
        <td>{{ product.surname }}</td>
        <td>{{ product.email }}</td>
      </tr>
    </tbody>
  </table>

</template>

<script>
// import { mapActions, mapGetters } from 'vuex';

  export default {
    data() {
      return {
        products: []
      }
    },
    mounted() {
      fetch('https://zile10.github.io/productsAPI/data.json')
        .then(res => { return res.json()})
        .then(data => { this.products = data.people})
        .catch(err => console.log(err.message))
    }
    // computed: {
    //   ...mapGetters(["banks"])
    // },
    // methods: {
    //   ...mapActions(["fetchAllBanks"])
    // },
    // created() {
    //   this.fetchAllBanks()
    // }
  }
</script>

<style scoped>

</style>