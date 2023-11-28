<template>
<div v-if="!createNoteStore.get().value">
  <button @click="createNoteStore.toggle">Create Note</button>
</div>
<div v-if="createNoteStore.get().value">
  <NotePad/>
</div>


</template>

<script setup lang="ts">
import { ref } from 'vue';
import NotePad from '@/components/NotePad.vue';
import { useCreateNoteStore } from '../stores/CreateNote';

const createNoteStore = useCreateNoteStore();

</script>

<style>
</style>