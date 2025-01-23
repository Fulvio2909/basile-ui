import styles from './navbar.module.css';

interface navbarProps {
  brand?: string;
  links?: { name: string; href: string}[];
}

export function Navbar(navbarProps: navbarProps) {
  return (
        <nav className={styles.navbar}>
          <a href="/" className={styles.navbarBrand}>
            {navbarProps.brand}
          </a>
          <div className={styles.navbarLinks}>
            {navbarProps.links && navbarProps.links.map((link, index) => (
              <a key={index} href={link.href} className={styles.navbarLink}>
                {link.name}
              </a>
            ))}
          </div>
        </nav>
  );
}

export default Navbar;
