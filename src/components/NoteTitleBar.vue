<template>
  <div class="noteTitleBar">
    <button class="backButton" @click="$router.push('/')">⮜Back</button>
    <input 
    name="title"
    class="noteTitle"
    type="text"
    placeholder="New Note"
    tabindex="1"
    id="noteTitle"
    maxlength="100"
     />
    <button class="plusButton saveButton" @click="saveNote">{{ saveText }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { saveNote } from '@/components/TSFiles/saveNote'

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: ''
  }
})

</script>

<script lang="ts">
export function getTitle() {
  return (document.getElementById('noteTitle') as HTMLTextAreaElement | null);
}

const saveText = ref('Save🖫')

export const saveButton = () => {
  saveText.value = 'Saved✔'
  setTimeout(() => {
    saveText.value = 'Save🖫'
  }, 1000)
}

</script>

<style>
.noteTitle {
  font-size: 30px;
  width: 88%;
  height: 35px;
  color: #000308;
  border: none;
}

.noteTitle:focus {
  outline: none;
}

.noteTitleBar {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.saveButton {
  width: 70px;
}

</style>
