<template>
  <div class="textBox">
    <LineNumbers 
    :lineNumbers=lineNumbers 
    :selectionRange="[0,0]"
    />
    <textarea 
      name="text"
      id="noteContent"
      class="noteText"
      placeholder="Begin writing your notes..."
      @keydown.tab.prevent="insertTabSpaces"
      @input="updateLineNumbers"
      tabindex="2"
      ></textarea>
  </div>
</template>

<script setup lang="ts">
import LineNumbers from './LineNumbers.vue'
import { ref } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: false,
    default: ''
  }
})

let oldText:string

const lineNumbers = ref(1);

const updateLineNumbers = (event:Event) => {
  const textArea = event.target as HTMLTextAreaElement;
  if(textArea) {
    oldText = oldText ? oldText : "";
    const textLen = textArea.value.length | 0;
    const oldLen = oldText.length;
    const textDifference = textLen - oldLen;
    const selection = textArea.selectionStart;
    if(textDifference > 0) { //addition
      for(let i = textDifference; i > 0; i--) {
        if(textArea.value[selection-i] === '\n') {
          lineNumbers.value++;
        }
      }
    } else if(textDifference < 0) { //deletion
      const positiveTextDiff = textDifference * -1;
      for(let i = 0; i < positiveTextDiff; i++) {
        if(oldText[selection+i] === '\n') {
          lineNumbers.value--;
        }
      }
    }
    oldText = textArea.value;
  }
}

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
<script lang="ts">
export function getContent() {
  return (document.getElementById('noteContent') as HTMLTextAreaElement | null);
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
  overflow-y: scroll;
  overflow-x: hidden;
}

.noteText {
  resize: none;
  overflow-y: hidden;
  overflow-x: scroll;
  white-space: nowrap;
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

  box-sizing: border-box;
  padding-top: 5px;
}

.noteText::placeholder {
  color: #000308;
}

.noteText:focus {
  box-shadow:
    0 4px 16px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.2);
}

*::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

*::-webkit-scrollbar-track {
  background: none;
}
*::-webkit-scrollbar-thumb {
  background: #637b9e;
  border-radius: 3px;
}

*::-webkit-scrollbar-thumb:hover {
  background: #28313f;
}


</style>
