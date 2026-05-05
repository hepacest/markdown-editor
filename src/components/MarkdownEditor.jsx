import { forwardRef } from 'react';

const MarkdownEditor = forwardRef(function MarkdownEditor(
  { value, onChange, placeholder },
  ref,
) {
  return (
    <textarea
      ref={ref}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="app__textarea"
      placeholder={placeholder}
    />
  );
});

export default MarkdownEditor;