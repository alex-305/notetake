<template>
  <div class="textBox">
    <LineNumbers 
    :lineNumbers=lineNumbers 
    :selectionRange="[0,0]"
    />
    <textarea name="text"
      ref="textRef"
      v-model="text"
      class="noteText"
      placeholder="Begin writing your notes..."
      @keydown.tab.prevent="insertTabSpaces"
      tabindex="2"
      ></textarea>
  </div>
</template>

<script setup lang="ts">
import { useCreateNoteStore } from '@/stores/CreateNoteStore'
import LineNumbers from './LineNumbers.vue'
import { ref, watch } from 'vue';

//const textRef = ref<HTMLTextAreaElement | null>(null);
const noteStore = useCreateNoteStore()
const props = defineProps({
  text: {
    type: String,
    required: false,
    default: ''
  }
})

const lineNumbers = ref(1);
const text = ref(props.text);

watch(text, (updatedText) => {
    noteStore.setContent(updatedText);
    if(lineNumbers.value !== updatedText.split('\n').length) {
      lineNumbers.value = updatedText.split('\n').length;
    }
})


const insertTabSpaces = (event:KeyboardEvent) => {
  if(event.key==="Tab") {
    event.preventDefault();
    const text = event.target as HTMLTextAreaElement
    const selection = text.selectionStart;

    text.value = text.value.substring(0, selection) + '    ' + text.value.substring(text.selectionEnd);
    text.selectionStart, text.selectionEnd = selection+4
  }
}


</script>

<style scoped>
.textBox {
  height: 100%;
  width: 96%;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  display: grid;
  grid-template-columns: 5% 95%;
  overflow-y: auto;
}

.noteText {
  resize: none;
  overflow: hidden;
  white-space: pre-wrap;
  word-wrap: break-word;
  color: #000308;
  font-size: 20px;
  width: 100%;
  height: 100%;
  background-color: #9fc4fc;
  outline: none;
  border: none;
  box-shadow:
    0 4px 16px 0 rgba(0, 0, 0, 0.1),
    0 6px 20px 0 rgba(0, 0, 0, 0.1);
}

.noteText::placeholder {
  color: #000308;
}

.noteText:focus {
  box-shadow:
    0 4px 16px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.2);
}

.textBox::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

.textBox::-webkit-scrollbar-track {
  background: #cfe2fe;
}
.textBox::-webkit-scrollbar-thumb {
  background: #637b9e;
  border-radius: 3px;
}

.textBox::-webkit-scrollbar-thumb:hover {
  background: #28313f;
}


</style>
