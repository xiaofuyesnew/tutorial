<template>
  <div class="container">
    <div
      class="w-[100px] h-[60px] flex items-center justify-center bg-black text-white cursor-pointer"
      @click="openWin"
    >
      login
    </div>
    <div
      class="w-[100px] h-[60px] flex items-center justify-center bg-black text-white cursor-pointer"
      @click="authUser"
    >
      auth
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { reactive } from 'vue'

const state = reactive({
  win: null,
  timer: null
})

const checkWin = () => {
  console.log('checking')
  console.log(state.win.authCode)
  if (state?.win.closed) {
    state.timer = null
  } else {
    state.timer = setTimeout(() => {
      checkWin()
    }, 500)
  }
}

const openWin = () => {
  state.win = window.open('https://github.com/login/oauth/authorize?client_id=8936ce20162fada9e7ac&redirect_uri=https://localhost:5173/auth', '', 'left=100,top=100,width=640,height=480')
  checkWin()
}

const authUser = () => {
  axios({
    url: '/api/user/auth',
    method: 'post',
    data: {
      code: '557aca77cda84aa45a7f'
    }
  }).then(res => {
    console.log(res)
  })
}
</script>
