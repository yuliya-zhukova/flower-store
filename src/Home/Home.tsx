import React from 'react';
import './Home.scss';
import { Navigation } from '../components/navigation/Navigation';
import { Header } from '../components/header/Header';
import { Content } from '../compositions/content/Content';
import { Footer } from '../components/footer/Footer';

export default function Home (): JSX.Element {
  return (
    <div className="container">
      <header className="row">
        <Header />
        <Navigation />
      </header>
      <main className="row">
        <Content />
      </main>
      <footer className="row row_footer">
        <Footer />
      </footer>
    </div>
  );
}
