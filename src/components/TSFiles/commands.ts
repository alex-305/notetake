export function saveNote (textArea: HTMLTextAreaElement) {

}

export function selectWord (textArea: HTMLTextAreaElement) {
    const text = textArea.value
    const selection = textArea.selectionStart;
    const wordBeginning = text.lastIndexOf(' ', selection-1) + 1;
    const wordEnd = text.indexOf(' ', selection);
    textArea.setSelectionRange(wordBeginning,wordEnd);

}

export function selectLine (textArea: HTMLTextAreaElement) {
    const text = textArea.value

    const beginning = textArea.selectionStart;
    const end = textArea.selectionEnd;
    let lineEnd = null;
    const lineBeginning = text.lastIndexOf('\n',beginning-1) + 1;

    if(beginning !== end) {
        lineEnd = text.indexOf('\n', end+1);
    } else if(beginning == end) {
        const selection = beginning;
        if(text[selection] === '\n') {
            lineEnd = selection +1;
        } else if(selection == text.length) {
            lineEnd = text.length;
        } else {
            lineEnd = text.indexOf('\n', beginning-1) + 1;
        }
    }
    if(lineEnd === -1) {
        lineEnd = text.length;
    }
    textArea.setSelectionRange(lineBeginning,lineEnd);
}
