<template>
    <div class="noteTitleBar">
        <button class="backButton" @click="$router.push('/')">⮜Back</button>
        <input class="noteTitle" type="text" :="noteName" placeholder="New Note">
    </div>
    <div>
        <NotePad/>
    </div>
    <div>
        <button class="plusButton">Create Note➤</button>
    </div>
    
    </template>
    
    <script setup lang="ts">
    import { ref } from 'vue';
    import NotePad from '../components/NotePad.vue'
    
    const noteName = ref('');
    
    const sendNoteToServer = () => {
        
    }
    
    
    </script>
    
    <style>
    
    .noteTitleBar {
        display: flex;
    }
    
    .noteTitle {
        border: none;
        font-size: 30px;
        width: 93.5%;
        height: 35px;
        margin-left: 10px;
    }
    .noteTitle:focus {
        border: none;
    }
    
    </style>