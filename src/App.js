import React from 'react';
import './App.scss';
import { Navigation } from './Navigation';
import { Header } from './Header';
import { Content } from './Content';

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
