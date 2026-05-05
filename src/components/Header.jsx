import styles from './Header.module.css';

export default function Header({
  title,
  locale,
  subtitle,
  ariaEnglish,
  ariaSpanish,
  onSelectLocale,
}) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <div className={styles.langSwitch}>
          <button
            type="button"
            className={`${styles.langButton} ${locale === 'en' ? styles.langButtonActive : ''}`}
            aria-label={ariaEnglish}
            title="English"
            onClick={() => onSelectLocale('en')}
          >
            <img src="/flags/us.svg" alt="United States flag" className={styles.flag} />
          </button>
          <button
            type="button"
            className={`${styles.langButton} ${locale === 'es' ? styles.langButtonActive : ''}`}
            aria-label={ariaSpanish}
            title="Español"
            onClick={() => onSelectLocale('es')}
          >
            <img src="/flags/co.svg" alt="Bandera de Colombia" className={styles.flag} />
          </button>
        </div>
      </div>
    </header>
  );
}