<template>
<div>
    <form class="note">
        <textarea @keydown="textCommands" class="noteText" placeholder="Begin writing your notes..."></textarea>
    </form>
</div>
</template>

<script setup lang="ts">
import {selectLine, selectWord, saveNote, deleteLine } from './TSFiles/commands'
    const textCommands = (event: KeyboardEvent) => {
        if(event.ctrlKey && event.key.toLowerCase()==='l') {
            event.preventDefault();
            selectLine(event.target as HTMLTextAreaElement);
        }

        if(event.ctrlKey && event.key.toLowerCase()=='s') {
            event.preventDefault();
            saveNote(event.target as HTMLTextAreaElement);
        }

        if(event.ctrlKey && event.key.toLowerCase()=='d') {
            event.preventDefault();
            selectWord(event.target as HTMLTextAreaElement);
        }
        
        if(event.ctrlKey && event.key.toLowerCase()=='x') {
            event.preventDefault();
            deleteLine(event.target as HTMLTextAreaElement);
        }
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