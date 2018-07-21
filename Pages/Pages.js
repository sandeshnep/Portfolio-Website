import React from 'react';
import classes from './Pages.css';
import Home from './Home/Home';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Ebooks from './ebooks/ebooks';




const Pages=(props)=>{


  return(


    <div className={classes.universalStyles}>

      <Home/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Ebooks/>


  </div>
  );

}

export default Pages;
