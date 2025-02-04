// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Button } from '@basile-ui/button';
import { Card } from '@basile-ui/card';
import { Grid } from '@basile-ui/grid';
import { Navbar } from '@basile-ui/navbar';
import { Sidebar } from '@basile-ui/sidebar';

export function App() {
  return (
    <>
      <Navbar brand='Basile UI' links={[{ name: 'Docs', href: '/' }, { name: 'Components', href: '/components' }]} />
      <Sidebar links={[{ name: 'Button', href: '/button' }, { name: 'card', href: '/card' }]} />
    </>
  );
}

export default App;
