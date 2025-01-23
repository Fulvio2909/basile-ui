import styles from './card.module.css';

type cardProps = {
  background?: string;
  header?: string;
  children?: React.ReactNode;
  footer?: string;
  size?: 's' | 'm' | 'l'; // New property
}

export function Card(cardProps: cardProps) {
  const sizeClass = cardProps.size ? styles[`card-${cardProps.size}`] : '';

  return (
    <div className={`${styles.card} ${sizeClass}`} style={{ background: cardProps.background }}>
      <div className={styles['card-header']}>
        {cardProps.header}
      </div>
      <div className={styles['card-content']}>
        {cardProps.children}
      </div>
      <div className={styles['card-footer']}>
        {cardProps.footer}
      </div>
    </div>
  );
}

export default Card;
