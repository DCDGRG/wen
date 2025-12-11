import React from 'react';
import './App.css';
import NavigationBar from './components/navigationBar';
import Hero from './components/hero';
import Projects from './components/project';
import Education from './components/education';
import Skills from './components/skill';
import Contact from './components/contact';
import SectionTitle from './components/SectionTitle';

function App() {

  return (
    <div className="App">

      <header className='App-header'>
        <NavigationBar />
      </header>

      <main>
        <Hero />

        <SectionTitle>Education</SectionTitle>
        <Education />

        <SectionTitle>Skills</SectionTitle>
        <Skills />

        <SectionTitle>Projects</SectionTitle>
        <Projects />

        <Contact />

      </main>

    </div>
  );
}

export default App;
