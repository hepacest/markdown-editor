import { useEffect, useState } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

marked.setOptions({
  breaks: true,
  gfm: true,
});

export default function useMarkdownPreview(markdown) {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    let isActive = true;

    const convertMarkdown = async () => {
      if (!markdown.trim()) {
        if (isActive) {
          setHtmlContent('');
        }
        return;
      }

      try {
        const rawHtml = await marked.parse(markdown);
        const sanitized = DOMPurify.sanitize(rawHtml);

        if (isActive) {
          setHtmlContent(sanitized);
        }
      } catch (error) {
        console.error('Error converting markdown:', error);

        if (isActive) {
          setHtmlContent('');
        }
      }
    };

    convertMarkdown();

    return () => {
      isActive = false;
    };
  }, [markdown]);

  return htmlContent;
}