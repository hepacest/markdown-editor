import styles from './Footer.module.css';

export default function Footer({ columns, copyright }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className={styles.title}>{column.title}</h3>
              <ul className={styles.list}>
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.bottom}>
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}