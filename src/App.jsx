// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import DocumentViewer from './components/DocumentViewer';

const documentId = '1Kozn8dels6qSMemAwXgdL_QkYRpmhH2Xtpw60qVy_Zc';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <DocumentViewer documentUrl={documentId} />
      <Contact />
      <SocialMedia />
      <Footer />

      {/* Other components will go here */}
    </div>
  );
}

export default App;
