import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { CardProps } from '@site/src/interface/cardProperties';
import styles from './index.module.css';
import StarIcon from '@site/static/svg/star_icon.svg';
import CheckIcon from '@site/static/svg/check_icon.svg';
import MenuIcon from '@site/static/svg/menu_icon.svg';
import ServerIcon from '@site/static/svg/server_icon.svg';

const Card: React.FC<CardProps> = ({ title, description, icon, to }) => (
  <Link to={to} className={styles.card}>
    <div className={styles.icon}>{icon}</div>
    <h2 className={styles.cardTitle}>{title}</h2>
    <p className={styles.cardDescription}>{description}</p>
  </Link>
);

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
        
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Docusphere</h1>
          <p className={styles.heroSubtitle}>
          From tools to concepts, your knowledge, all connected.
          </p>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.grid}>
          <Card
            title="App 1"
            description="Get started with our flagship application. Learn about core features, best practices, and advanced workflows."
            icon={<StarIcon />}
            to="/docs/app1"
          />
          <Card
            title="App 2"
            description="Explore our secondary application's documentation, including setup guides and integration tutorials."
            icon={<CheckIcon />}
            to="/docs/app2"
          />
          <Card
            title="Frontend Testing"
            description="Explore tools and frameworks for testing frontend components, user interfaces and interaction."
            icon={<MenuIcon />}
            to="/docs/frontend"
          />
          <Card
            title="Backend Testing"
            description="Learn about tools for testing API's, database integration and backend services effectively."
            icon={<ServerIcon />}
            to="/docs/backend"
          />
        </div>
      </main>
    </Layout>
  );
}