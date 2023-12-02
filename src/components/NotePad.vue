<template>
<div class="notePad">
    <div>
        <NoteTitleBar class="noteTitleBar"/>
    </div>
    <div>
        <form class="textBox">
            <TextBox class="textBox"/>
        </form>
    </div>
    <div>
        <button class="saveButton">Save🖫</button>
    </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TextBox from '../components/TextBox.vue'
import NoteTitleBar from './NoteTitleBar.vue';

const sendNoteToServer = () => {
    
}


</script>

<style>

.notePad {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}

.textBox {
    width: 98%;
    height: 500px;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
}

.noteTitleBar {
    display: flex;
}

.noteTitle {
    font-size: 30px;
    width: 93.1%;
    height: 35px;
    margin-left: 10px;
    background-color: #9fc4fc;
    color: #000308;
}

.noteTitle::placeholder {
    color: #000308;
}

.noteTitle:focus {
    outline: none;
}

</style>