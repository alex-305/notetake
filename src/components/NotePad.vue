<template>
<div class="noteTitleBar">
    <button class="backButton" @click="createNoteStore.toggle">⇇Back</button>
    <input class="noteTitle" type="text" :="noteName" placeholder="New Note">
</div>
<div>
    <form class="note">
        <textarea class="noteText" placeholder="⸨Enter some text⸩"></textarea>
    </form>
</div>
<div>
    <button class="plusButton">Create Note</button>
</div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCreateNoteStore } from '../stores/CreateNote';

const createNoteStore = useCreateNoteStore();
const noteName = ref('');


</script>

<style>
.note {
    width: 90%;
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
    color: black;
    font-size: 20px;
    width: 100%;
    height: 100%;
}

.noteTitleBar {
    display: flex;
}

.noteTitle {
    border: none;
    font-size: 30px;
    width: 80%;
    height: 35px;
    margin-left: 10px;
}
.noteTitle:focus {
    border: none;
}

</style>