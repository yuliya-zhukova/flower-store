import React from 'react';
import { Navigation } from '../components/navigation/Navigation';
import { Header } from '../components/header/Header';
import { Content } from '../compositions/content/Content';
import { Footer } from '../components/footer/Footer';
import { ProductCard } from '../ProductCard/ProductCard';
import { Breadcrumbs } from '../components/Breadcrumbs/Breadcrumbs';

export function Home (): JSX.Element {
  return (
    <div className="container">
      <header className="row">
        <Header />
        <Navigation />
      </header>
      <div className="row">
        <Breadcrumbs />
      </div>
      <div className="row">
        <ProductCard />
      </div>
      <main className="row">
        <Content />
      </main>
      <footer className="row row_footer">
        <Footer />
      </footer>
    </div>
  );
}
