import React from 'react';
import './App.scss';
import { Navigation } from './navigation/Navigation';
import { Header } from './header/Header';
import { Content } from './content/Content';

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
      <footer className="row">
        Footer
      </footer>
    </div>
  );
}
