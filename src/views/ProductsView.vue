<template>
  <div class="container">
    <div class="row">
      <h1 class="display-1">Products</h1>
      <ProductsTable></ProductsTable>
    </div>
  </div>
</template>

<script>
import ProductsTable from '../components/ProductsTable.vue'
  export default {
    components: {
      ProductsTable
    }
  }
</script>

<style scoped>

</style>