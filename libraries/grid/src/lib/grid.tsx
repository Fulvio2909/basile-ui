import styles from './grid.module.css';

type GridProps = {
  items: React.ReactNode[];
  columns?: number; // Prop opzionale per il numero di colonne
};

export function Grid({ items, columns = 3 }: GridProps) {
  return (
    <div
      className={styles.grid}
      style={{ '--columns': columns } as React.CSSProperties} // Imposta la proprietà CSS personalizzata
    >
      {items.map((item, index) => (
        <div key={index} className={styles['grid-item']}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default Grid;
