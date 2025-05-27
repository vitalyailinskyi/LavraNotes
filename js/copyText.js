function copyText(button) {
    const codeContainer = button.closest('.code');
    const preTag = codeContainer.querySelector('pre');

    const input = preTag.textContent;
    const textArea = document.createElement('textarea');

    textArea.textContent = input;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();

    button.classList.add('copied');
    // Hide the popup after 2 seconds
    setTimeout(() => {
        button.classList.remove('copied');
    }, 3000);

    
}