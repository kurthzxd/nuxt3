<template>
    <div>
        <n-space vertical>
    <n-input v-model:value="value" type="text" placeholder="Basic Input" />
    <n-input
      v-model:value="value"
      type="textarea"
      placeholder="Basic Textarea"
    />
  </n-space>
    </div>
</template>

<script setup>
import {  ref } from 'vue'
import { NInput,  NSpace } from 'naive-ui'
const value = ref("")
</script>

<style scoped>

</style>