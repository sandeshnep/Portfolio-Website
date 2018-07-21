import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Logo.css';
import logo from '../../res/Logo.png';

const Logo=()=>{

  return(
    <Aux>
       <img className={classes.logo} src={logo} alt="Logo"/>
    </Aux>

  );
}

export default Logo;
