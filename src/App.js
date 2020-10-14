import React from 'react';
import './App.scss';
import { Navigation } from './navigation/Navigation';
import { Header } from './header/Header';
import { Content } from './content/Content';
import { Footer } from './footer/Footer';

export default function App() {
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
