import React from 'react';
import Aux from '../../../hoc/Aux';
import classes from './Terminal.css';

const Terminal=()=>{
  return(
    <Aux>

      <div className={classes.terminal}>
      <div className={classes.fakeMenu}>
      <div className={[classes.fakeButtons, classes.fakeClose].join(' ')}></div>
      <div className={[classes.fakeButtons, classes.fakeMinimize].join(' ')}></div>
      <div className={[classes.fakeButtons, classes.fakeZoom].join(' ')}></div>
      </div>
      <div className={classes.fakeScreen}>
      <p className={classes.line1}>$ Hello!<span className={classes.cursor1}>_</span></p>
      <p className={classes.line2}>I am Sandesh, a computer science student.<span className={classes.cursor2}>_</span></p>
      <p className={classes.line3}> I love learning, and applying my knowledge to make amazing programs.  <span className={classes.cursor3}>_</span></p>
      <p className={classes.line4}>I wear many different hats: design, front-end & back-end. :) <span className={classes.cursor3}>_</span></p>
      <p className={classes.line4}>><span className={classes.cursor4}>_</span></p>
      </div>
      </div>


    </Aux>

  );
}

export default Terminal;
