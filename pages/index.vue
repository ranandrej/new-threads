<script setup>
import MainLayout from '~/layouts/MainLayout.vue'

import axios from "axios"
const isPosts=ref(true)

definePageMeta({
  middleware: 'auth'
})
onMounted(async()=>{
    useUserStore().posts=await $fetch('/api/all',{
      method:"GET"
    }
    )
    
        
    
})
const removePost = (id) => {
  const index = useUserStore().posts.findIndex(p => p.id === id)
  if (index !== -1) {
    useUserStore().posts.splice(index, 1)
  }
  }

</script>

<template>
   <MainLayout>
      
      <div id="IndexPage" class="w-full overflow-auto py-6">
        
       <div class="mx-auto max-w-[500px] overflow-hidden">
        <div id="Posts" class="px-4 max-w-[600px] mx-auto">
          <div class="text-white text-3xl" v-if="isPosts" v-for="post in useUserStore().posts" :key="post">
            
          <Post :post="post" @isDeleted="removePost(post.id)"/>
          </div>
         
        </div>
       </div>
      </div>
    </MainLayout>
</template>