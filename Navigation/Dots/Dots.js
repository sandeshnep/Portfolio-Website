import React from 'react';
import classes from './Dots.css';

let homeCurrent;
let skillsCurrent;
let projCurrent;
let conCurrent;
let ebookCurrent;

const Dots=(props)=>{

  if(props.current==="Home"){
    homeCurrent=classes.current;
    skillsCurrent={};
    projCurrent={};
    conCurrent={};
    ebookCurrent={};
  }
  else if(props.current==="Skills"){
    skillsCurrent=classes.current;
    homeCurrent={};
    projCurrent={};
    conCurrent={};
    ebookCurrent={};
  }
  else if(props.current==="Project"){
    projCurrent=classes.current;
    homeCurrent={};
    skillsCurrent={};
    conCurrent={};
    ebookCurrent={};
  }
  else if(props.current==="Contact"){
    conCurrent=classes.current;
    homeCurrent={};
    skillsCurrent={};
    projCurrent={};
    ebookCurrent={};
  }
  else if(props.current==="ebooks"){
    ebookCurrent=classes.current;
    conCurrent={};
    homeCurrent={};
    skillsCurrent={};
    projCurrent={};

  }


  return(
    <div className={[classes.dotstyle, classes.dotstyledotstroke].join(' ')}>
        <ul>
          <li className={homeCurrent}><a href="#Home">Home</a></li>

          <li className={skillsCurrent}><a href="#Skills">Skills</a></li>

          <li className={projCurrent}><a href="#Projects">Projects</a></li>

          <li className={conCurrent}><a href="#Contact">Contact</a></li>

          <li className={ebookCurrent}><a href="#ebooks">Ebooks</a></li>

        </ul>
      </div>

  );
}

export default Dots;
