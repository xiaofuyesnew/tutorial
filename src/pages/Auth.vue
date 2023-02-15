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
  window.authCode = route.query.code

  // axios({
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   method: 'POST',
  //   url: 'https://github.com/login/oauth/access_token',
  //   data: {
  //     'client_id': '8936ce20162fada9e7ac',
  //     'client_secret': 'e26ff315227a28793c406505ded51a73a85b3b0a',
  //     code: route.query.code
  //   }
  // }).then(res => {
  //   alert(JSON.stringify(res))
  // })

  axios({
    url: '/api/user/auth',
    method: 'post',
    data: {
      code: route.query.code
    }
  }).then(res => {
    console.log(res)
  })
})

</script>
