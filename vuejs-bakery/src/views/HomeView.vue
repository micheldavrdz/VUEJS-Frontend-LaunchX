<template>
  <Navbar/>
  <Header/>
  <Cakes/>
  <Toppers/>
  <Form/>
  <Footer/>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Header from '@/components/Header.vue'
import Cakes from '@/components/Cakes.vue'
import Toppers from '@/components/Toppers.vue'
import Form from '@/components/Form.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Header,
    Cakes,
    Toppers,
    Form,
    Footer
  }
}
</script>
