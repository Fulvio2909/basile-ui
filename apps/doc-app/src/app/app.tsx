// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes,  } from 'react-router';
import styles from './app.module.css';
import { Docs } from '../pages/Docs';
import { Components } from '../pages/Components';
import { Navbar } from '@basile-ui/navbar';
import { Button } from '@basile-ui/button';
import { Card } from '@basile-ui/card';
// importa altri componenti qui

export function App() {
  return (
    <div className={styles.container}>
      <Navbar 
      brand="Basile UI" 
      links={[
        { name: 'Docs', href: '/' },
        { name: 'Components', href: '/components' },
      ]}
      />

      <Routes>
      <Route path="/" element={<Docs />} />
      <Route path="components" element={<Components />}>
        <Route path="button" />
        <Route path="card" />
        <Route path="grid" />
        <Route path="sidebar" />
        <Route path="navbar" />
      </Route>
      </Routes>
    </div>
  );
}

export default App;
