<template>
  <div class="header-center">
      <Header />
  </div>
  <div class="container-center min-h-screen">
    <Base />
  </div>
</template>

<script lang="ts">
import Header from './components/Header.vue'
import Base from './components/Base.vue'


export default {
  data() {
    return {
      title: 'Bionic Reading',
    }
  },
  components: {
    Base,
    Header
  }
}
</script>

