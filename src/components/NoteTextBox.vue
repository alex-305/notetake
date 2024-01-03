<template>
  <div class="textBox">
    <LineNumbers 
    :lineNumbers=lineNumbers 
    :selectionRange="selectionRange"
    />
    <textarea 
      name="text"
      id="noteContent"
      class="textArea"
      placeholder="Begin writing your notes..."
      spellcheck="false"
      @keydown.tab.prevent="insertTabSpaces"
      @input="updateLineNumbers"
      tabindex="2"
      maxlength="30000"
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
const selectionRange = ref<number[]>([0,0]);

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
  width: 98%;
  padding: 5px;
  margin: 5px;
  display: grid;
  grid-template-columns: 5% 95%;
  overflow-y: scroll;
}

.textArea {
  resize: none;
  overflow-x: scroll;
  white-space: nowrap;
  color: #000308;
  font-size: 20px;
  width: 95%;
  height: 100%;
  outline: none;
  border: none;
}

</style>
