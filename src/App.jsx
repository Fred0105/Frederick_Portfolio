import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact'; // <-- Import Contact

function App() {
  return (
    <div>
      <Navbar />
      
      <main>
        <Hero />
        <Skills />
        <Projects />
        
        {/* Section 4: Contact (Final) */}
        <Contact />
      </main>
    </div>
  );
}

export default App;