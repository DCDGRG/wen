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

        <p> My Education</p>
        <Education />

        <p> My Skills</p>
        <Skills />
        

        <p> My Projects</p>
        <Projects />


        <p> Contact Me</p>
        
      </main>

      

    </div>
  );
}

export default App;
