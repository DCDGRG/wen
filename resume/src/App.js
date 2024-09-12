import React from 'react';
import './App.css';
import NavigationBar from './components/navigationBar';
import Hero from './components/hero';
import Projects from './components/project';
import Education from './components/education';
import Skills from './components/skill';

function App() {

  return (
    <div className="App">

      <header className='App-header'>
        <NavigationBar />
      </header>

      <main>
        <Hero /> 

        

        <p style={{fontSize:'1.5rem', fontFamily: 'Poppins, sans-serif' }}> My Education</p>
        <Education />

        <p style={{fontSize:'1.5rem', fontFamily: 'Poppins, sans-serif' }}> My Skills</p>
        <Skills />
        

        <p style={{ fontSize: '1.5em', fontFamily: 'Poppins, sans-serif' }}>My Projects</p>
        <Projects />
        
        <p style={{fontSize:'1.5rem', fontFamily: 'Poppins, sans-serif' }}> Contact Me</p>
        
      </main>

      

    </div>
  );
}

export default App;
