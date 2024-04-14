<script setup>
import MainLayout from '~/layouts/MainLayout.vue'

import axios from "axios"
const text=ref("")
onMounted(async()=>{
    text.value=await $fetch('http://localhost:3000/api/all',{
      method:"GET"
    }
    )
    
        
    
})

</script>

<template>
  <MainLayout>
    <h2>Hello world</h2>
    <h3>{{ text }}</h3>
  </MainLayout>
</template>