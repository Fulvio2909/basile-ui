import styles from './components.module.css';
import { Sidebar } from '@basile-ui/sidebar';
import { Outlet } from 'react-router';

type ComponentsProps = {

}

export function Components({ }: ComponentsProps) {

  return (
    <>
      <div className={styles.componentsContainer}>
        <Sidebar
          links={[
            { name: 'Button' },
            { name: 'Card' },
            { name: 'Grid' },
            { name: 'Sidebar' },
            { name: 'Navbar' },
            { name: 'hero' },
            { name: 'footer' },
          ]}
        />
        <div className={styles.content}>
        <Outlet />
        </div>
      </div>
    </>
  );
}

export default Components;
