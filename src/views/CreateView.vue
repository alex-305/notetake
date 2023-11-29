<template>
    <div class="noteTitleBar">
        <button class="backButton" @click="$router.push('/')">⮜Back</button>
        <input class="noteTitle" type="text" :="noteName" placeholder="New Note">
    </div>
    <div>
        <NotePad/>
    </div>
    <div>
        <button class="saveButton">Save🖫</button>
    </div>
    
    </template>
    
    <script setup lang="ts">
    import { ref } from 'vue';
    import NotePad from '../components/NotePad.vue'
    
    const noteName = ref('');
    const noteContent = ref('');
    
    const sendNoteToServer = () => {
        
    }
    
    
    </script>
    
    <style>
    
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