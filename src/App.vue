<template>
  <div class="flex-grow">
    <Header />
    <router-view></router-view>
  </div>
  <Footer />
</template>

<script>
import Header from './components/Common/Header.vue'
import Footer from './components/Common/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
