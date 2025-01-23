import styles from './grid.module.css';

type GridProps = {
  items: React.ReactNode[];
}

export function Grid({ items }: GridProps) {
  return (
    <div className={styles.grid}>
      {items.map((item, index) => (
        <div key={index} className={styles['grid-item']}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default Grid;
