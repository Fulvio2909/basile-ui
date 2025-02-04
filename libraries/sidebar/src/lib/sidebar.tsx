import React from 'react';
import styles from './sidebar.module.css';
import { Link } from 'react-router';

type sidebarProps = {
  links?: { name: string;}[];
}

export function Sidebar({ links }: sidebarProps) {

  const handleClick = () => {

  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.navbarLinks}>
        {links && links.map((link, index) => (
          <>
              <Link key={index} to={link.name} className={styles.navbarLink} onClick={handleClick}>
                {link.name}
              </Link>
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
