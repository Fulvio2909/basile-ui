// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Button } from '@basile-ui/button';
import { Card } from '@basile-ui/card';
import { Grid } from '@basile-ui/grid';
import { Navbar } from '@basile-ui/navbar';

export function App() {
  return (
    <>
    <Navbar brand='Basile UI' links={[{name: 'Home', href: '/'}, {name: 'About', href: '/about'}]}/>
      <Grid items={[
        <Card children={<> <p>content card</p> <Button label='button'/> </>} size='l'/>,
        <Card children={<> <p>content card</p> <Button label='button'/> </>} size='s'/>,
        <Card children={<> <p>content card</p> <Button label='button'/> </>} size='s'/>
      ]} />
    </>
  );
}

export default App;
