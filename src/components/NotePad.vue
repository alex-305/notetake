<template>
<div>
    <form class="note">
        <textarea @keydown="textCommands" :="noteString" class="noteText" placeholder="Begin writing your notes..."></textarea>
    </form>
</div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    const noteString = ref('');

    const textCommands = (event: KeyboardEvent) => {
        if(event.ctrlKey && event.key.toLowerCase()==='l') {
            event.preventDefault();
            selectLine(event.target as HTMLTextAreaElement);
        }
    }

    const selectLine = (textArea: HTMLTextAreaElement) => {
        const beginning = textArea.selectionStart;
        const text = textArea.value
        const end = textArea.selectionEnd;
        
        const lineBeginning = text.lastIndexOf('\n',beginning-1) + 1;
        let lineEnd = text.indexOf('\n', beginning);
        if(lineEnd === -1) {
            lineEnd = text.length;
        }
        if(lineBeginning !== lineEnd) {
            lineEnd = text.indexOf('\n', end+1);
        }
        textArea.setSelectionRange(lineBeginning,lineEnd);
    }

</script>

<style>
    .note {
        width: 98%;
        height: 500px;
        border-radius: 5px;
        padding: 5px;
        margin: 5px;
    }
    .noteText {
        resize: none;
        overflow-y: scroll;
        white-space: pre-wrap;
        word-wrap: break-word;
        color: #000308;
        font-size: 20px;
        width: 100%;
        height: 100%;
        background-color: #9fc4fc;
        outline: none;
    }

    .noteText::placeholder {
        color: #000308;
    }

</style>