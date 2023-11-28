import { defineStore } from "pinia";
import { ref } from 'vue';

export const useCreateNoteStore = defineStore(('createNote'), () => {

    const createNote = ref(false);

    const toggle = () => { createNote.value = !createNote.value}
    const get = () => { return createNote; }

    return {toggle, get}
})