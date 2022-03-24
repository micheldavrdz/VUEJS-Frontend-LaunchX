<template>
  <Navbar/>
  <Header/>
  <Table/>
  <Footer/>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Table from '@/components/Table.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Header,
    Table,
    Footer
  }
}
</script>