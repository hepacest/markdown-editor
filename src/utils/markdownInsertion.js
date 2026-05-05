export function applyMarkdownInsertion({
  value,
  selectionStart,
  selectionEnd,
  before,
  after = '',
}) {
  const selectedText = value.substring(selectionStart, selectionEnd);
  const newText = before + selectedText + after;
  const nextValue = value.substring(0, selectionStart) + newText + value.substring(selectionEnd);

  return {
    nextValue,
    selectionStart: selectionStart + before.length,
    selectionEnd: selectionStart + before.length + selectedText.length,
  };
}