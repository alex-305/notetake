export function saveNote (textArea: HTMLTextAreaElement) {

}

export function selectWord (textArea: HTMLTextAreaElement) {
    const text = textArea.value
    const beginning = textArea.selectionStart;
    const end = textArea.selectionEnd;
    let wordBeginning = text.lastIndexOf(' ', beginning-1) + 1;
    let wordEnd = text.indexOf(' ', beginning);
    const lineBeginning = text.indexOf('\n', beginning);
    const lineEnd = text.indexOf('\n', beginning);

    if(beginning == end) {
        if(lineBeginning < wordBeginning && lineBeginning != -1) {
            wordBeginning = lineBeginning;
        }
        if(lineEnd < wordEnd && lineEnd != -1) {
            wordEnd = lineEnd;
        }
        console.log("beg:" + wordBeginning + "end:" + wordEnd);
        textArea.setSelectionRange(wordBeginning,wordEnd);
    } else {
        const wordSelected = text.substring(beginning, end);
        const indexOfNextWord = text.indexOf(wordSelected, end);

        if(indexOfNextWord !== -1) {
            textArea.setSelectionRange(indexOfNextWord, indexOfNextWord+wordSelected.length)
        } else {
            textArea.setSelectionRange(end,end);
        }
    }
}

export function selectLine (textArea: HTMLTextAreaElement) {
//Problems are when trying to select in the middle of last line in text document it goes back to beginning of text
    const text = textArea.value

    const beginning = textArea.selectionStart;
    const end = textArea.selectionEnd;
    let lineEnd = null;
    const lineBeginning = text.lastIndexOf('\n',beginning-1) + 1;

    if (beginning !== end) {
        lineEnd = text.indexOf('\n', end+1);
    } else {
        const selection = beginning;
        if(text[selection] === '\n') {
            lineEnd = selection + 1;
        } else if(selection === text.length) {
            lineEnd = text.length;
        } else{
            lineEnd = text.indexOf('\n', beginning);
            if(lineEnd !== -1) {
                lineEnd++;
            }
        }
        console.log("linebeg:"+lineBeginning+"lineend"+lineEnd);

    }
    if(lineEnd === -1) {
        lineEnd = text.length;
    }
    textArea.setSelectionRange(lineBeginning,lineEnd);
}



export function deleteLine(textArea: HTMLTextAreaElement) {

}