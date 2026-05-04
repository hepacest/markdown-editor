const actions = [
  {
    label: 'B',
    className: 'app__toolbar-button app__toolbar-button--bold',
    before: '**',
    after: '**',
  },
  {
    label: 'I',
    className: 'app__toolbar-button app__toolbar-button--italic',
    before: '*',
    after: '*',
  },
  {
    label: 'H1',
    className: 'app__toolbar-button app__toolbar-button--heading',
    before: '# ',
  },
  {
    label: 'H2',
    className: 'app__toolbar-button app__toolbar-button--heading',
    before: '## ',
  },
  {
    label: '❝',
    className: 'app__toolbar-button',
    before: '> ',
  },
  {
    label: '⌨️',
    className: 'app__toolbar-button',
    before: '```\n',
    after: '\n```',
  },
  {
    label: '•',
    className: 'app__toolbar-button',
    before: '- ',
  },
  {
    label: '1.',
    className: 'app__toolbar-button',
    before: '1. ',
  },
  {
    label: '🔗',
    className: 'app__toolbar-button',
    before: '[',
    after: '](url)',
  },
];

export default function MarkdownToolbar({ onInsert }) {
  return (
    <div className="app__toolbar">
      {actions.map((action) => (
        <button
          key={action.label}
          type="button"
          onClick={() => onInsert(action.before, action.after ?? '')}
          className={action.className}
        >
          {action.label}
        </button>
      ))}
    </div>
  );
}