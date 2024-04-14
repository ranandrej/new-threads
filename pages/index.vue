<script setup>
import MainLayout from '~/layouts/MainLayout.vue'

import axios from "axios"
const isPosts=ref(true)
const posts=ref([])
definePageMeta({
  middleware: 'auth'
})
onMounted(async()=>{
    posts.value=await $fetch('/api/all',{
      method:"GET"
    }
    )
    
        
    
})

</script>

<template>
   <MainLayout>
      
      <div id="IndexPage" class="w-full overflow-auto py-6">
        
       <div class="mx-auto max-w-[500px] overflow-hidden">
        <div id="Posts" class="px-4 max-w-[600px] mx-auto">
          <div class="text-white text-3xl" v-if="isPosts" v-for="post in posts" :key="post">
            
          <Post :post="post" @isDeleted="posts=[]"/>
          </div>
         
        </div>
       </div>
      </div>
    </MainLayout>
</template>