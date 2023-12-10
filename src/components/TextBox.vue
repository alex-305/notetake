<template>
<div>
    <textarea 
        v-model="text"
        class="noteText"
        placeholder="Begin writing your notes..."
    ></textarea>
</div>
</template>

<script setup lang="ts">

    const props = defineProps({
        text: {
            type:String,
            required:false,
            default:''
        }
    })

    const text = props.text;

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
        border: none;
        box-shadow: 0 4px 16px 0 rgba(0,0,0,0.1), 0 6px 20px 0 rgba(0,0,0,0.1);
        overflow: auto;
    }

    .noteText::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }
    
    .noteText::-webkit-scrollbar-track {
        background: #CFE2FE;
    }
    .noteText::-webkit-scrollbar-thumb {
        background: #637B9E;
        border-radius: 3px;
    }   

    .noteText::-webkit-scrollbar-thumb:hover {
        background: #28313F;
    }

    .noteText::placeholder {
        color: #000308;
    }

    .noteText:focus {
        box-shadow: 0 4px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.2);
    }

</style>