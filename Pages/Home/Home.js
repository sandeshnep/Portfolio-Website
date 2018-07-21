import React from 'react';
import classes from './Home.css';
import Aux from '../../hoc/Aux';
import Dots from '../../Navigation/Dots/Dots';
import Card from '../../UI/Card/Card';
import Intropic from '../../res/intro.jpg';
import Terminal from './Terminal/Terminal';
import Links from './Links/Links';
import { Parallax } from 'react-scroll-parallax';
import HomeIcon from '../../res/home.svg';


const Home=() => {
  return(
    <div id="Home" className={classes.container}>



    <Parallax
            className="custom-class"
            offsetYMax={-40}
            offsetYMin={40}
            slowerScrollRate
            tag="figure"

        >
          <div className={classes.Introcard}>
                <div className = {classes.links2}>
                <a href="/"></a>
                <a href="#ebooks">Read My Ebooks</a>
                </div>
                <Card>
                  <Terminal/>
                </Card>
          </div>
    </Parallax>

    <div className={classes.links}>

        <Links/>

    </div>

</div>
  );

}

export default Home;
