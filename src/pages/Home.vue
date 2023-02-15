<template>
  <div class="w-screen h-screen flex items-center justify-center">
    {{ state.msg }}
  </div>
</template>

<script setup>
import axios from 'axios'
import { onMounted, reactive } from 'vue'

const state = reactive({
  msg: ''
})

onMounted(() => {
  axios({
    url: `${import.meta.env.VITE_API_PREFIX}/api/test`
  }).then(res => {
    state.msg = res.data.msg
  })
})

</script>
