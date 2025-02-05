import styles from './card.module.css';
import { Hero } from '@basile-ui/hero';

type DocsProps = {

}

export function Docs({ }: DocsProps) {

  return (
    <>
      <Hero
        title="Benvenuto in Basile-UI"
        subtitle="Una libreria di componenti moderna e minimalista per le tue applicazioni web"
        cta={{ text: "Scopri di più", href: "/components" }}
      />
    </>
  );
}

export default Docs;
