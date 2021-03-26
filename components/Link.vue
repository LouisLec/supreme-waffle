<template>
  <nuxt-link to="https://nuxtjs.org" :style="`color: ${color}`">
    {{label}}
  </nuxt-link>
</template>
<script>
export default {
  name:"link",
  props:{
    color:{type: String, required: false, default:'rgb(250,0,200)'},
    label:{type:String, required: true},
    to:{type:String, required: false, default:'google.co'},
  }
}
</script>
