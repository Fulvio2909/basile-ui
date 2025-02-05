import React from 'react';
import { useLocation, Link } from 'react-router';
import styles from '../styles/components.module.css';
import { Sidebar } from '@basile-ui/sidebar';
import DocumentationSection from '../components/DocumentationSection';
import { componentMapping } from '../mapping/componentMapping';

export function Components() {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const current = pathParts[pathParts.length - 1].toLowerCase();
  const details = componentMapping[current];

  const links = [
    { name: 'button' },
    { name: 'card' },
    { name: 'grid' },
    { name: 'sidebar' },
    { name: 'navbar' },
    { name: 'hero' },
    { name: 'footer' },
  ];

  return (
    <div className={styles.componentsContainer}>
      <Sidebar links={links.map(link => ({ name: link.name }))} />
      <div className={styles.content}>
        {details ? (
          <DocumentationSection 
            title={details.title}
            preview={details.preview}
            code={details.code}
          />
        ) : (
          <p className={styles.selectComponentMessage}>Selezionare un componente dalla Sidebar.</p>
        )}
      </div>
    </div>
  );
}

export default Components;
