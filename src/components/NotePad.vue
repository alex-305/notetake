<template>
<div class="notePad" @keydown.ctrl="ctrlTextCommands">
    <div>
        <NoteTitleBar class="noteTitleBar"/>
    </div>
    <div>
        <form class="textBox">
            <TextBox class="textBox"/>
        </form>
    </div>
</div>
</template>

<script setup lang="ts">
import TextBox from '../components/TextBox.vue';
import NoteTitleBar from './NoteTitleBar.vue';
import { ctrlTextCommands } from './TSFiles/commands';

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
    background-color: #A89FFC;
}

.textBox {
    width: 98%;
    height: 500px;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
}

</style>