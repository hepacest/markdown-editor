import { useState, useRef, useEffect } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

// Configurar marked correctamente
marked.setOptions({
  breaks: true,
  gfm: true,
});

function App() {
  const [markdown, setMarkdown] = useState('');
  const [htmlContent, setHtmlContent] = useState('');
  const [dividerPosition, setDividerPosition] = useState(50); // porcentaje de ancho para editor
  const [isResizing, setIsResizing] = useState(false);
  const textareaRef = useRef(null);
  const containerRef = useRef(null);

  // Convertir markdown a HTML cuando cambye
  useEffect(() => {
    const convertMarkdown = async () => {
      if (markdown.trim()) {
        try {
          const rawHtml = await marked.parse(markdown);
          const sanitized = DOMPurify.sanitize(rawHtml);
          setHtmlContent(sanitized);
        } catch (error) {
          console.error('Error converting markdown:', error);
          setHtmlContent('');
        }
      } else {
        setHtmlContent('');
      }
    };
    convertMarkdown();
  }, [markdown]);

  useEffect(() => {
    if (!isResizing) return;

    const onMouseMove = (event) => {
      const container = containerRef.current;
      if (!container) return;
      const { left, width } = container.getBoundingClientRect();
      const offset = event.clientX - left;
      const next = Math.max(20, Math.min(80, (offset / width) * 100));
      setDividerPosition(next);
    };

    const onMouseUp = () => {
      setIsResizing(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [isResizing]);

  const insertText = (before, after = '') => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = markdown.substring(start, end);
    const newText = before + selectedText + after;
    const newMarkdown = markdown.substring(0, start) + newText + markdown.substring(end);
    setMarkdown(newMarkdown);

    // Set cursor position after insertion
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + before.length, start + before.length + selectedText.length);
    }, 0);
  };

  return (
    <div className={`app${isResizing ? ' app--resizing' : ''}`}>
      {/* Global Header */}
      <header className="app__header">
        <div className="app__header-inner">
          <h1 className="app__title">📝 Visor Markdown</h1>
          <p className="app__subtitle">Convierte Markdown a HTML en tiempo real</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="app__main">
        <div className="app__container">

        {/* Main Interface */}
        <div
          ref={containerRef}
          className="app__layout"
          style={{ '--editor-width': `${dividerPosition}%` }}
        >
          {/* Editor Panel */}
          <div className="app__editor-panel">
            {/* Editor Header */}
            <div className="app__editor-header">
              <h3 className="app__editor-title">✏️ Editor Markdown</h3>
            </div>

            {/* Toolbar */}
            <div className="app__toolbar">
              <button onClick={() => insertText('**', '**')} className="app__toolbar-button app__toolbar-button--bold">B</button>
              <button onClick={() => insertText('*', '*')} className="app__toolbar-button app__toolbar-button--italic">I</button>
              <button onClick={() => insertText('# ')} className="app__toolbar-button app__toolbar-button--heading">H1</button>
              <button onClick={() => insertText('## ')} className="app__toolbar-button app__toolbar-button--heading">H2</button>
              <button onClick={() => insertText('> ')} className="app__toolbar-button">❝</button>
              <button onClick={() => insertText('```\n', '\n```')} className="app__toolbar-button">⌨️</button>
              <button onClick={() => insertText('- ')} className="app__toolbar-button">•</button>
              <button onClick={() => insertText('1. ')} className="app__toolbar-button">1.</button>
              <button onClick={() => insertText('[', '](url)')} className="app__toolbar-button">🔗</button>
            </div>

            {/* Editor Content */}
            <textarea
              ref={textareaRef}
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              className="app__textarea"
              placeholder="Escribe tu contenido con Markdown aquí..."
            />
          </div>

          {/* Divider draggable */}
          <div
            onMouseDown={() => setIsResizing(true)}
            className="app__divider"
          />

          {/* Preview Panel */}
          <div className="app__preview-panel">
            {/* Preview Header */}
            <div className="app__preview-header">
              <h3 className="app__preview-title">👁️ Vista Previa HTML</h3>
              <span className="app__preview-badge">RT</span>
            </div>

            {/* Preview Content */}
            <div className="app__preview-content">
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            </div>
          </div>
        </div>
        </div>
      </main>

      {/* Global Footer */}
      <footer className="app__footer">
        <div className="app__footer-inner">
          <div className="app__footer-grid">
            <div>
              <h3 className="app__footer-title">Características</h3>
              <ul className="app__footer-list">
                <li>✓ Conversión en tiempo real</li>
                <li>✓ Protección contra XSS</li>
                <li>✓ Interfaz intuitiva</li>
              </ul>
            </div>
            <div>
              <h3 className="app__footer-title">Tecnologías</h3>
              <ul className="app__footer-list">
                <li>React + Vite</li>
                <li>Tailwind CSS</li>
                <li>Marked + DOMPurify</li>
              </ul>
            </div>
            <div>
              <h3 className="app__footer-title">Información</h3>
              <ul className="app__footer-list">
                <li>v1.0</li>
                <li>2026 © HEPAC</li>
              </ul>
            </div>
          </div>
          <div className="app__footer-bottom">
            <p>Diseñado con ❤️ por © HEPAC</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;