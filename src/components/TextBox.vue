<template>
<div>
    <textarea 
        @keydown="textCommands"
        v-model="text"
        class="noteText"
        placeholder="Begin writing your notes..."
    ></textarea>
</div>
</template>

<script setup lang="ts">
import {selectLine, selectWord, saveNote, deleteLine } from './TSFiles/commands'

    const props = defineProps({
        text: {
            type:String,
            required:false,
            default:''
        }
    })

    const text = props.text;

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