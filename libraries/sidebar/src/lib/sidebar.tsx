import React from 'react';
import styles from './sidebar.module.css';

type sidebarProps = {
  links?: { name: string; href: string }[];
}

export function Sidebar({ links }: sidebarProps) {
  return (
    <div className={styles.sidebar}>
      <div className={styles.navbarLinks}>
        {links && links.map((link, index) => (
          <>
            <a href={link.href} className={styles.navbarLink}>
              {link.name}
            </a>
            {index < links.length - 1 && (
              <span className={styles.divider}></span>
            )}
          </>
        ))}

      </div>
    </div>
  );
}

export default Sidebar;
