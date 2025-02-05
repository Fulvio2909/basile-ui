// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes, } from 'react-router';
import styles from './app.module.css';
import { Docs } from '../pages/Docs';
import { Components } from '../pages/Components';
import { Navbar } from '@basile-ui/navbar';
import { ContentContainer } from '../components/ContentContainer';
import { Footer } from '@basile-ui/footer';

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
          <Route path="button" element={<ContentContainer><p>Button Component</p></ContentContainer>} />
          <Route path="card" element={<ContentContainer><p>Card Component</p></ContentContainer>} />
          <Route path="grid" element={<ContentContainer><p>Grid Component</p></ContentContainer>} />
          <Route path="sidebar" element={<ContentContainer><p>Sidebar Component</p></ContentContainer>} />
          <Route path="navbar" element={<ContentContainer><p>Navbar Component</p></ContentContainer>} />
        </Route>
      </Routes>

      <Footer links={[
        { name: 'Docs', href: '/' },
        { name: 'Components', href: '/components' },
      ]} />
    </div>
  );
}

export default App;
