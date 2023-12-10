<template>
    <div class="noteTitleBar">
        <button class="backButton" @click="$router.push('/')">⮜Back</button>
        <input class="noteTitle" type="text" placeholder="New Note">
        <button class="saveButton">Save🖫</button>
    </div>
</template>

<script setup lang="ts">


</script>

<style>
.noteTitle {
    font-size: 30px;
    width: 88%;
    height: 35px;
    background-color: #9fc4fc;
    color: #000308;
    border: none;
    box-shadow: 0 4px 16px 0 rgba(0,0,0,0.1), 0 6px 20px 0 rgba(0,0,0,0.1);
}

.noteTitle::placeholder {
    color: #000308;
}

.noteTitle:focus {
    outline: none;
    box-shadow: 0 4px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.2);
}

.backButton:hover {
    background-color: #FC9FC4;
}

.backButton:active:hover {
    background-color: #BD7793;
}

.saveButton:hover {
    background-color: #9FFCA9;
}

.saveButton:active:hover {
    background-color: #77BD7F;
}


.noteTitleBar {
    display: flex;
    justify-content: space-between;
    gap: 10px;
}

</style>