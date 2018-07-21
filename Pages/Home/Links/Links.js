import React from 'react';
import Card from '../../../UI/Card/Card';
import Aux from '../../../hoc/Aux';
import github from './github.png';
import linkedin from './linkedin.png';
import classes from './Links.css';


const Links=()=>{

  return(
    <Aux>

      <div className={classes.linkContainer}>
              <Card link="http://github.com/sandeshnep">
                <img src={github} className={classes.icon}/>
              </Card>
      </div>


      <div className={classes.linkContainer}>
                <Card link="https://www.linkedin.com/in/sandesh-paudel/">
                  <img src={linkedin} className={classes.icon}/>
                </Card>
      </div>

    </Aux>
  );

}

export default Links;
