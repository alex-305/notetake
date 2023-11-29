<template>
<div>
    <form class="note">
        <textarea @keydown="textCommands" class="noteText" placeholder="Begin writing your notes..."></textarea>
    </form>
</div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    const textCommands = (event: KeyboardEvent) => {
        if(event.ctrlKey && event.key.toLowerCase()==='l') {
            event.preventDefault();
            selectLine(event.target as HTMLTextAreaElement);
        }

        if((event.ctrlKey && event.key.toLowerCase()=='s')) {
            event.preventDefault();
            saveNote(event.target as HTMLTextAreaElement);
        }
    }

    const saveNote = (textArea: HTMLTextAreaElement) => {

    }

    const selectLine = (textArea: HTMLTextAreaElement) => {
        let beginning = textArea.selectionStart;
        const text = textArea.value
        const end = textArea.selectionEnd;
        let lineEnd = null;
        const lineBeginning = text.lastIndexOf('\n',beginning-1) + 1;

        if(beginning !== end) {
            lineEnd = text.indexOf('\n', end+1);
        } else if(beginning == end) {
            const selection = beginning;
            if(text[selection] === '\n') {
                lineEnd = selection +1;
            } else if(selection == text.length) {
                lineEnd = text.length;
            } else {
                lineEnd = text.indexOf('\n', beginning-1) + 1;
            }
        }
        if(lineEnd === -1) {
            lineEnd = text.length;
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