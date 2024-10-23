const markdownInput = document.getElementById('markdown-input');
const markdownPreview = document.getElementById('markdown-preview');
const renderMarkdown = (text) => {
return text
.replace(/^# (.*$)/gim, '<h1>$1</h1>')
.replace(/^## (.*$)/gim, '<h2>$1</h2>')
.replace(/^### (.*$)/gim, '<h3>$1</h3>')
.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
.replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
.replace(/\*(.*)\*/gim, '<em>$1</em>')
.replace(/`(.*?)`/gim, '<code>$1</code>')
.replace(/\n$/gim, '<br>')
.replace(/^\s*-\s+(.*)$/gm, '<ul><li>$1</li></ul>');
};
markdownInput.addEventListener('input', () => {
const markdownText = markdownInput.value;
markdownPreview.innerHTML = renderMarkdown(markdownText);
});
markdownPreview.innerHTML = `
<h3>Markdown Previewer</h3>
<p>Type and see the live preview!</p>`;
