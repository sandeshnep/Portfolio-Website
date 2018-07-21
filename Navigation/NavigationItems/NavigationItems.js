import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Toggle from '../Drawer/Toggle/Toggle';



let homeCurrent=true;
let skillsCurrent=false;
let projCurrent=false;
let conCurrent=false;


const navigationItems = (props) => {

  if(props.current==="Home"){
    homeCurrent=true;
    skillsCurrent=false;
    projCurrent=false;
    conCurrent=false;
  }
  else if(props.current==="Skills"){
    skillsCurrent=true;
    homeCurrent=false;
    projCurrent=false;
    conCurrent=false;
  }
  else if(props.current==="Project"){
    projCurrent=true;
    homeCurrent=false;
    skillsCurrent=false;
    conCurrent=false;
  }
  else if(props.current==="Contact"){
    conCurrent=true;
    homeCurrent=false;
    skillsCurrent=false;
    projCurrent=false;
  }



    return(

    <ul className={classes.NavigationItems}>
        <NavigationItem link="#Home" active={homeCurrent} >Home</NavigationItem>


        <NavigationItem link="#Skills" active={skillsCurrent} >Skills</NavigationItem>


        <NavigationItem link="#Projects" active={projCurrent} >Projects</NavigationItem>


        <NavigationItem link="#Contact" active={conCurrent} >Contact</NavigationItem>
    </ul>
  )

}

export default navigationItems;
