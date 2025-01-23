// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Button } from '@basile-ui/button';
import { Card } from '@basile-ui/card';
import { Navbar } from '@basile-ui/navbar';

export function App() {
  return (
    <>
    <Navbar brand='Basile UI' links={[{name: 'Home', href: '/'}, {name: 'About', href: '/about'}]}/>
      <Button label="Click me" />
      <Card background='' header='Card' children={
        <>
          <p>Card content</p>
          <p>Card content</p>
        </>
      } footer='Bo'/>
    </>
  );
}

export default App;
