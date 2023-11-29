<template>
<div>
  <button @click="$router.push('create')" class="plusButton">New note</button>
</div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import NotePad from '@/components/NotePad.vue';

</script>

<style>
</style>