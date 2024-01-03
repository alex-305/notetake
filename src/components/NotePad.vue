<template>
  <div class="notePad" @keydown.ctrl="ctrlTextCommands">
    <div>
      <NoteTitleBar :title="title" class="noteTitleBar"/>
    </div>
    <form class="textBox">
      <NoteTextBox :text="text"/>
    </form>
  </div>
</template>

<script setup lang="ts">
import NoteTextBox from '../components/NoteTextBox.vue'
import NoteTitleBar from './NoteTitleBar.vue'
import { ctrlTextCommands } from './TSFiles/commands'

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: ''
  },
  text: {
    type: String,
    required: false,
    default: ''
  }
})
const title = props.title;
const text = props.text;

// const save = () => {
//   (this as any).$refs.NoteTitleBar.save()
//   saveNote
// }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@600&display=swap');

.notePad {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.notePad * {
  font-family: 'JetBrains Mono', monospace;
}

.notePad *::selection {
  background-color: #a89ffc;
}

.textBox {
    width: 98%;
    height: 500px;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
}

</style>
