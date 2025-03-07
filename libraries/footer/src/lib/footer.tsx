import styles from './footer.module.css';

type FooterProps = {
  links?: { name: string; href: string }[];
  background?: string;
}

export function Footer({ links, background }: FooterProps) {
  return (
    <footer className={styles.footer} style={{ background }}>
      <div className={styles.footerContent}>
        {links?.map((link, index) => (
          <a key={index} href={link.href} className={styles.footerLink}>
            {link.name}
          </a>
        ))}
      </div>
      <p className={styles.footerCopy}>© 2025 basile-ui. Tutti i diritti riservati.</p>
    </footer>
  );
}

export default Footer;
