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
            <Link to={link.name}>
              <a key={index} className={styles.navbarLink} onClick={handleClick}>
                {link.name}
              </a>
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
