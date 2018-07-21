import React from 'react';

import classes from './Toggle.css';

const drawerToggle = (props) => {

  let toggle= classes.DrawerToggle;
  if(props.drawer){
    toggle = classes.close;
  }

  return(
    <div className={toggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

}


export default drawerToggle;
