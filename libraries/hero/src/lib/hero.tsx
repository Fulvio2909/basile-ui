import styles from './hero.module.css';
import React from 'react';

interface HeroProps {
  title?: string;
  subtitle?: string | React.ReactNode; // Updated type
  cta?: { text: string; href: string };
}

export function Hero({ title, subtitle, cta }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        {title && <h1 className={styles.heroTitle}>{title}</h1>}
        {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}
        {cta && (
          <a href={cta.href} className={styles.heroCta}>
            {cta.text}
          </a>
        )}
      </div>
    </section>
  );
}

export default Hero;