import { useCreateNoteStore } from "@/stores/CreateNoteStore"
export function ctrlTextCommands(event: KeyboardEvent) {
  const text = event.target as HTMLTextAreaElement

  switch(event.key.toLowerCase()) {
    case 'l':
    case 's':
    case 'd':
    case 'x':
      event.preventDefault()
  }

  switch (event.key.toLowerCase()) {
    case 'l':
      selectLine(text)
      break
    case 's':
      saveNote(text)
      break
    case 'd':
      selectWord(text)
      break
    case 'x':
      deleteLine(text)
      break
  }
}

export function saveNote(textArea: HTMLTextAreaElement) {
  const createNoteStore = useCreateNoteStore();
  const content = createNoteStore.getContent();
  const title = createNoteStore.getTitle();


}

function selectWord(textArea: HTMLTextAreaElement) {
  //Lots of problems atm
  const alphaNumRegex = /[^a-zA-Z0-9]/;
  const text = textArea.value
  const beginning = textArea.selectionStart
  const end = textArea.selectionEnd
  let wordBeginning = text.indexOf(text.match(alphaNumRegex)?.[beginning] ?? ' ');
  let wordEnd = text.lastIndexOf(text.match(alphaNumRegex)?.[beginning] ?? ' ');``
  const lineBeginning = text.indexOf('\n', beginning)
  const lineEnd = text.indexOf('\n', beginning)

  if (beginning == end) {
    if (lineBeginning < wordBeginning && lineBeginning != -1) {
      wordBeginning = lineBeginning
    }
    if (lineEnd < wordEnd && lineEnd != -1) {
      wordEnd = lineEnd
    }
    console.log('beg:' + wordBeginning + 'end:' + wordEnd)
    textArea.setSelectionRange(wordBeginning, wordEnd)
  } else {
    const wordSelected = text.substring(beginning, end)
    const indexOfNextWord = text.indexOf(wordSelected, end)

    if (indexOfNextWord !== -1) {
      textArea.setSelectionRange(indexOfNextWord, indexOfNextWord + wordSelected.length)
    } else {
      textArea.setSelectionRange(end, end)
    }
  }
}

function selectLine(textArea: HTMLTextAreaElement) {
  const text = textArea.value
  const beginning = textArea.selectionStart
  const end = textArea.selectionEnd
  let lineEnd = null
  const lineBeginning = text.lastIndexOf('\n', beginning - 1) + 1

  if (beginning !== end) {
    if (text.indexOf('\n', end) === -1) {
      lineEnd = text.length
    } else if (text[end] === '\n') {
      lineEnd = end + 1
    } else {
      lineEnd = text.indexOf('\n', end + 1) + 1
    }
  } else {
    const selection = beginning
    if (text[selection] === '\n') {
      lineEnd = selection + 1
    } else if (selection === text.length) {
      lineEnd = text.length
    } else {
      lineEnd = text.indexOf('\n', beginning)
      if (lineEnd !== -1) {
        //as long as it is not the last line of the text, select the newline character as well
        lineEnd++
      }
    }
  }
  if (lineEnd === -1) {
    lineEnd = text.length
  }
  textArea.setSelectionRange(lineBeginning, lineEnd)
}

function deleteLine(textArea: HTMLTextAreaElement) {
    const text = textArea.value
    const beginning = textArea.selectionStart
    const end = textArea.selectionEnd
    let lineEnd = null
    const lineBeginning = text.lastIndexOf('\n', beginning - 1) + 1
  
    const selection = beginning
    if (text[selection] === '\n') {
      lineEnd = selection + 1
    } else if (selection === text.length) {
      lineEnd = text.length
    } else {
      lineEnd = text.indexOf('\n', beginning)
      if (lineEnd !== -1) {
        //as long as it is not the last line of the text, select the newline character as well
        lineEnd++
      }
    }

    if (lineEnd === -1) {
        lineEnd = text.length
    }
    
    textArea.value = text.substring(0, lineBeginning-1) + text.substring(lineEnd+1, text.length);

}
