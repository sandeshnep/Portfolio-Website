import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Drawer.css';

import Aux from '../../hoc/Aux';

const Drawer = ( props ) => {
  
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>

              <div className={attachedClasses.join(' ')}>

                  <nav>
                      <NavigationItems />
                  </nav>
              </div>
        </Aux>
    );
};

export default Drawer;
