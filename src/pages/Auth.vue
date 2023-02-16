<template>
  <div>authorizing...</div>
</template>

<script setup>
import axios from 'axios'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

console.log(route.query)

onMounted(() => {
  // window.authCode = route.query.code

  axios({
    url: '/api/user/auth',
    method: 'post',
    data: {
      code: route.query.code
    }
  }).then(res => {
    console.log(res)
    window.user = res.data
    window.close()
  })
})

</script>
