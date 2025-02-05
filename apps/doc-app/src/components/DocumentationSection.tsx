import React from 'react';
import styles from '../styles/documentationSection.module.css';

type DocumentationSectionProps = {
  title: string;
  preview: React.ReactNode;
  code: string;
};

export function DocumentationSection({ title, preview, code }: DocumentationSectionProps) {
  return (
    <div className={styles.docSection}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.preview}>
        {preview}
      </div>
      <pre className={styles.code}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default DocumentationSection;
