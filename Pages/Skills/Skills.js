import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Skills.css';
import Card from '../../UI/Card/Card';
import Myphoto from '../../res/intro.jpg';
import { Parallax } from 'react-scroll-parallax';


class Skills extends Component{
  render(){

  return(
    <Aux>


      <div id="Skills" className={classes.pageContainer}>

        <Parallax
                offsetYMax={0}
                offsetYMin={-40}
                slowerScrollRate
                tag="figure"
            >
            <h1> Skills</h1>

            <div className={classes.myPhoto}>

              <Card>
                <img src={Myphoto}/>
              </Card>
            </div>
        </Parallax>



            <div className={classes.skillsFlex}>

                <div className={classes.Skillbox}>
                    <Card type='skill'>
                      <strong> Core CS</strong>
                      <ul>
                        <li> Java</li>
                        <li> C</li>
                        <li> Python </li>
                        <li> Data Structures and Algorithms</li>
                      </ul>

                    </Card>
                </div>


            <div className={classes.Skillbox}>
                <Card type='skill'>
                <strong>Front End</strong>
                <ul>
                  <li> React Js </li>
                  <li> JavaScript</li>
                  <li> HTML5</li>
                  <li> CSS3</li>
                </ul>

                </Card>
            </div>

            <div className={classes.Skillbox}>
                <Card type='skill'>
                <strong>Back End</strong>
                <ul>
                  <li> MySQL </li>
                  <li> NoSQL</li>
                  <li> RESTful API</li>
                  <li> Node Js</li>
                  <li> Database Security</li>
                </ul>
                </Card>
            </div>

            <div className={classes.Skillbox}>
                <Card type='skill'>
                <strong>  Artificial Intelligence</strong>

                  <ul>
                    <li> Heuristic Search </li>
                    <li> Reasoning</li>
                    <li> Neural Networks</li>

                  </ul>
                </Card>
            </div>




          </div>




        </div>




    </Aux>

  );

  }
}

export default Skills;
