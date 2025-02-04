import styles from './card.module.css';
import { Button } from '@basile-ui/button';
import { Card } from '@basile-ui/card';
import { Grid } from '@basile-ui/grid';
import { Navbar } from '@basile-ui/navbar';
import { Sidebar } from '@basile-ui/sidebar';
import { Outlet } from 'react-router';

type ComponentsProps = {

}

export function Components({ }: ComponentsProps) {

  return (
    <>
      <Sidebar
        links={[
          { name: 'Button' },
          { name: 'Card'},
          { name: 'Grid'},
          { name: 'Sidebar'},
          { name: 'Navbar'}
        ]}
      />
      <Outlet />
    </>
  );
}

export default Components;
