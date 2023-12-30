import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCreateNoteStore = defineStore('newNote', () => {
  const noteTitle = ref('')
  const noteContent = ref('')

  const setTitle = (title:string) => { noteTitle.value = title; }
  const setContent = (content:string) => { noteContent.value = content; }

  const getTitle = () => { return noteTitle.value; }
  const getContent = () => { return noteContent.value; }

  return { setTitle, setContent, getTitle, getContent }
})
