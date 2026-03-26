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
    <div className="flex flex-col min-h-screen bg-slate-100">
      {/* Global Header */}
      <header className="bg-gradient-to-r from-slate-800 to-slate-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-10 py-6">
          <h1 className="text-3xl font-bold">📝 Visor Markdown</h1>
          <p className="text-slate-300 text-sm mt-1">Convierte Markdown a HTML en tiempo real</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="grow p-10">
        <div className="max-w-7xl mx-auto bg-white rounded-xl border border-slate-200 shadow-sm">

        {/* Main Interface */}
        <div
          ref={containerRef}
          className="flex h-[600px] relative"
          style={{ userSelect: isResizing ? 'none' : 'auto' }}
        >
          {/* Editor Panel */}
          <div
            className="flex flex-col border-r border-slate-200 overflow-hidden"
            style={{ flex: `0 0 ${dividerPosition}%`, minWidth: '220px' }}
          >
            {/* Editor Header */}
            <div className="bg-slate-200 px-4 py-2 border-b border-slate-300">
              <h3 className="text-sm font-semibold text-slate-700">✏️ Editor Markdown</h3>
            </div>

            {/* Toolbar */}
            <div className="bg-slate-900 px-3 py-2 flex gap-2">
              <button onClick={() => insertText('**', '**')} className="px-3 py-1 bg-slate-600 text-white rounded text-sm font-bold hover:bg-slate-500">B</button>
              <button onClick={() => insertText('*', '*')} className="px-3 py-1 bg-slate-600 text-white rounded text-sm italic hover:bg-slate-500">I</button>
              <button onClick={() => insertText('# ')} className="px-3 py-1 bg-slate-600 text-white rounded text-xs font-bold hover:bg-slate-500">H1</button>
              <button onClick={() => insertText('## ')} className="px-3 py-1 bg-slate-600 text-white rounded text-xs font-bold hover:bg-slate-500">H2</button>
              <button onClick={() => insertText('> ')} className="px-3 py-1 bg-slate-600 text-white rounded text-sm hover:bg-slate-500">❝</button>
              <button onClick={() => insertText('```\n', '\n```')} className="px-3 py-1 bg-slate-600 text-white rounded text-sm hover:bg-slate-500">⌨️</button>
              <button onClick={() => insertText('- ')} className="px-3 py-1 bg-slate-600 text-white rounded text-sm hover:bg-slate-500">•</button>
              <button onClick={() => insertText('1. ')} className="px-3 py-1 bg-slate-600 text-white rounded text-sm hover:bg-slate-500">1.</button>
              <button onClick={() => insertText('[', '](url)')} className="px-3 py-1 bg-slate-600 text-white rounded text-sm hover:bg-slate-500">🔗</button>
            </div>

            {/* Editor Content */}
            <textarea
              ref={textareaRef}
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              className="flex-1 p-4 bg-slate-800 text-slate-200 font-mono text-sm resize-none outline-none"
              placeholder="Escribe tu contenido con Markdown aquí..."
            />
          </div>

          {/* Divider draggable */}
          <div
            onMouseDown={() => setIsResizing(true)}
            className="cursor-col-resize bg-slate-300 hover:bg-slate-400"
            style={{ width: '8px', zIndex: 20 }}
          />

          {/* Preview Panel */}
          <div className="flex flex-col" style={{ flex: 1, minWidth: '220px' }}>
            {/* Preview Header */}
            <div className="bg-blue-100 px-4 py-2 border-b border-blue-200 flex justify-between items-center">
              <h3 className="text-sm font-semibold text-blue-800">👁️ Vista Previa HTML</h3>
              <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">RT</span>
            </div>

            {/* Preview Content */}
            <div className="flex-1 p-6 bg-white overflow-auto">
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
      <footer className="bg-slate-900 text-slate-400 shadow-sm border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-10 py-6">
          <div className="grid grid-cols-3 gap-8 mb-6">
            <div>
              <h3 className="text-white font-semibold mb-3">Características</h3>
              <ul className="text-sm space-y-1">
                <li>✓ Conversión en tiempo real</li>
                <li>✓ Protección contra XSS</li>
                <li>✓ Interfaz intuitiva</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Tecnologías</h3>
              <ul className="text-sm space-y-1">
                <li>React + Vite</li>
                <li>Tailwind CSS</li>
                <li>Marked + DOMPurify</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Información</h3>
              <ul className="text-sm space-y-1">
                <li>v1.0</li>
                <li>2026 © HEPAC</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-4 text-center text-sm">
            <p>Diseñado con ❤️ por © HEPAC</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;