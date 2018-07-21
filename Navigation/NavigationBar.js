import React from 'react';
import classes from './NavigationBar.css';
import NavigationItems from './NavigationItems/NavigationItems';
import Logo from './Logo/Logo';
import Toggle from './Drawer/Toggle/Toggle';

const NavigationBar = (props) => {

    return(
      <header>

          <nav className={classes.Nav}>
            <NavigationItems current={props.current}/>
          </nav>

      </header>

    );
}

export default NavigationBar;
