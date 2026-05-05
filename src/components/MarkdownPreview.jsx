import { forwardRef } from 'react';

const MarkdownPreview = forwardRef(function MarkdownPreview({ htmlContent, title }, ref) {
  return (
    <div className="app__preview-panel">
      <div className="app__preview-header">
        <h3 className="app__preview-title">{title}</h3>
        <span className="app__preview-badge">RT</span>
      </div>

      <div ref={ref} className="app__preview-content">
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  );
});

export default MarkdownPreview;