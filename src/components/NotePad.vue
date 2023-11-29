<template>
<div>
    <form class="note">
        <textarea :="noteString" class="noteText" placeholder="Begin writing your notes..."></textarea>
    </form>
</div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    const noteString = ref('');

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
        color: black;
        font-size: 20px;
        width: 100%;
        height: 100%;
    }

</style>