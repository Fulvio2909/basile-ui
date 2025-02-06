import React from 'react';
import { Button } from '@basile-ui/button';
import { Card } from '@basile-ui/card';
import { Grid } from '@basile-ui/grid';
import { Sidebar } from '@basile-ui/sidebar';
import { Navbar } from '@basile-ui/navbar';
import { Hero } from '@basile-ui/hero';
import { Footer } from '@basile-ui/footer';

export const componentMapping: Record<string, {
  title: string;
  preview: React.ReactNode;
  code: string;
}> = {
  button: {
    title: 'Button',
    preview: <Button onClick={() => alert('Clicked!')} label="Click Me" />,
    code: `<Button onClick={() => alert('Clicked!')}>Click Me</Button>`,
  },
  card: {
    title: 'Card',
    preview: (
      <Card
        header="Card Header"
        footer="Card Footer"
        size="m"
      >
        This is a complete card with a header, content, and footer.
      </Card>
    ),
    code: `<Card
  header="Card Header"
  footer="Card Footer"
  size="m"
>
  This is a complete card with a header, content, and footer.
</Card>`,
  },
  grid: {
    title: 'Grid',
    preview: (
      <Grid
        items={[
          <div>Item 1</div>,
          <div>Item 2</div>,
          <div>Item 3</div>,
          <div>Item 4</div>,
          <div>Item 5</div>,
          <div>Item 6</div>,
        ]}
        columns={3}
      />
    ),
    code: `<Grid
  items={[
    <div>Item 1</div>,
    <div>Item 2</div>,
    <div>Item 3</div>,
    <div>Item 4</div>,
    <div>Item 5</div>,
    <div>Item 6</div>,
  ]}
  columns={3}
/>`,
  },
  sidebar: {
    title: 'Sidebar',
    preview: <Sidebar links={[{ name: 'Home' }, { name: 'About' }, { name: 'Contact' }]} />,
    code: `<Sidebar links={[{ name: 'Home' }, { name: 'About' }, { name: 'Contact' }]} />`,
  },
  navbar: {
    title: 'Navbar',
    preview: <Navbar brand="Basile UI" links={[{ name: 'Home', href: '/' }, { name: 'About', href: '/about' }]} />,
    code: `<Navbar brand="Basile UI" links={[{ name: 'Home', href: '/' }, { name: 'About', href: '/about' }]} />`,
  },
  hero: {
    title: 'Hero',
    preview: <Hero title="Benvenuto" subtitle="Sottotitolo" cta={{ text: 'Scopri di più', href: '#' }} />,
    code: `<Hero title="Benvenuto" subtitle="Sottotitolo" cta={{ text: 'Scopri di più', href: '#' }} />`,
  },
  footer: {
    title: 'Footer',
    preview: <Footer links={[{ name: 'Privacy', href: '' }, { name: 'Terms', href: '' }]} />,
    code: `<Footer links={[{ name: 'Privacy', href: '/privacy' }, { name: 'Terms', href: '/terms' }]} />`,
  },
};
