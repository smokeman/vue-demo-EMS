<template>
<div id="app">
  <router-view>
  </router-view>

  <FooterView></FooterView> 
</div>
</template>

<script>
 import FooterView from './pages/footer.vue'
export default {
  name: 'app',
  
  components:{
			FooterView
		}
 

}
</script>

<style scoped>


</style>