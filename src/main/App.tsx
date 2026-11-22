import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HvacHighlight from '../components/HvacHighlight';
import Differentials from '../components/Differentials';
import About from '../components/About';
import Partners from '../components/Partners';
import Footer from '../components/Footer';
import WhatsappFixed from '../components/utils/WhatsappFixed';

function App() {
  return (
    <>
      <Hero />
      <main>
        <Services />
        <HvacHighlight />
        <Differentials />
        <About />
        <Partners />
      </main>
      <Footer />
      <WhatsappFixed />
    </>
  );
}

export default App;
