<script setup>
import axios from "axios"
const text=ref("")
onMounted(async()=>{
    await axios.get('/api/hi').then((res)=>{
        text.value=res.data
    })
    
        
    
})

</script>

<template>
    <h2>Hello world</h2>
    <h3>{{ text }}</h3>
</template>