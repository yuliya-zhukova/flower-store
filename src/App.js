import React from 'react';
import './App.scss';
import { Navigation } from './components/navigation/Navigation';
import { Header } from './components/header/Header';
import { Content } from './components/content/Content';
import { Footer } from './components/footer/Footer';

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
