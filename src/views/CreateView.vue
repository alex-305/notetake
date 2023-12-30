<template>
  <NotePad/>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import NotePad from '../components/NotePad.vue'

onMounted(() => {
  //(this as any).$refs.NotePad.NoteTitleBar.focus();
})
</script>
