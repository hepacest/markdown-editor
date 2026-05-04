import { useState, useRef } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import MarkdownEditor from './components/MarkdownEditor';
import MarkdownPreview from './components/MarkdownPreview';
import MarkdownToolbar from './components/MarkdownToolbar';
import PanelResizer from './components/PanelResizer';
import useMarkdownPreview from './hooks/useMarkdownPreview.js';
import usePanelResize from './hooks/usePanelResize.js';
import es from './languages/es.js';
import en from './languages/en.js';
import { applyMarkdownInsertion } from './utils/markdownInsertion.js';

const translations = { es, en };

function App() {
  const [locale, setLocale] = useState('es');
  const t = translations[locale];
  const footerColumns = [
    {
      title: t.footerFeaturesTitle,
      items: [t.footerFeature1, t.footerFeature2, t.footerFeature3],
    },
    {
      title: t.footerTechTitle,
      items: ['React + Vite', 'Tailwind CSS', 'Marked + DOMPurify'],
    },
    {
      title: t.footerInfoTitle,
      items: ['v1.0', '2026 © HEPAC'],
    },
  ];
  const [markdown, setMarkdown] = useState('');
  const textareaRef = useRef(null);
  const containerRef = useRef(null);
  const htmlContent = useMarkdownPreview(markdown);
  const {
    dividerPosition,
    isResizing,
    startResizing,
  } = usePanelResize(containerRef);

  const insertText = (before, after = '') => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const { nextValue, selectionStart, selectionEnd } = applyMarkdownInsertion({
      value: markdown,
      selectionStart: textarea.selectionStart,
      selectionEnd: textarea.selectionEnd,
      before,
      after,
    });

    setMarkdown(nextValue);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(selectionStart, selectionEnd);
    }, 0);
  };

  return (
    <div className={`app${isResizing ? ' app--resizing' : ''}`}>
      <Header
        title={t.appTitle}
        subtitle={t.appSubtitle}
        locale={locale}
        ariaEnglish={t.ariaEnglish}
        ariaSpanish={t.ariaSpanish}
        onSelectLocale={setLocale}
      />

      {/* Main Content */}
      <main className="app__main">
        <div className="app__container">

        {/* Main Interface */}
        <div
          ref={containerRef}
          className="app__layout"
          style={{ '--editor-width': `${dividerPosition}%` }}
        >
          <div className="app__editor-panel">
            <div className="app__editor-header">
              <h3 className="app__editor-title">{t.editorTitle}</h3>
            </div>

            <MarkdownToolbar onInsert={insertText} />
            <MarkdownEditor
              ref={textareaRef}
              value={markdown}
              onChange={setMarkdown}
              placeholder={t.textareaPlaceholder}
            />
          </div>

          <PanelResizer onMouseDown={startResizing} />

          <MarkdownPreview htmlContent={htmlContent} title={t.previewTitle} />
        </div>
        </div>
      </main>

      <Footer columns={footerColumns} copyright={t.footerCopyright} />
    </div>
  );
}

export default App;