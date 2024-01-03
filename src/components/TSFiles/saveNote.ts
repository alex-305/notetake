import { getContent } from '@/components/NoteTextBox.vue'
import { getTitle, saveButton } from '@/components/NoteTitleBar.vue'

export function saveNote() {
    const noteContent = getContent();
    const noteTitle = getTitle();
    saveButton();

  }