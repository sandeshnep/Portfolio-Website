import React, {Component} from 'react';
import classes from './ebooks.css';
import Aux from '../../hoc/Aux';
import axios from 'axios';
import Card from '../../UI/Card/Card';
import { Parallax } from 'react-scroll-parallax';
import bookbg from '../../res/book.svg';

class ebooks extends Component{



  render(){

  return(
    <Aux>
      <div id="ebooks" className={classes.ebooksContainer}>
        <h1> Ebooks </h1>
        <h2> From web-design to philosophy and everything in between. This is a collection of books and notes that I have written as a student.  </h2>


        <div className={classes.books}>
        <h3> Computer Science </h3>

            <Card type="book" link="https://docs.google.com/document/d/1IUZnaHKYOeF7AZ6iQQIsMbR2PqVpSArvWgdpwNaL4a0/edit?usp=sharing">
                <h1> Computer Science Fundamentals </h1>
            </Card>
            <Card type="book" link="https://docs.google.com/document/d/1nrbnZ2XffuVbL_UVKeXjC58yOwiXtVzPLeG03Um3zEI/edit?usp=sharing">
                <h1> The Memory Hierarchy </h1>
            </Card>
            <Card type="book" link="https://docs.google.com/document/d/1aVdFfqkCD0Nab7WOR2EJlXw6_SJ6nX6mBHNRyOyo81k/edit?usp=sharing">
                <h1>Signals</h1>
            </Card>
            <Card type="book" link="https://docs.google.com/document/d/1eQT8hGoBV1G0iSj8CwUPNkGDb9TsLApuPYtpH7jEu1g/edit?usp=sharing">
                <h1>Threads</h1>
            </Card>

            <Card type="book" link="https://docs.google.com/document/d/1ijTUuTI9O4ThQKfjodNzdAOJjHQWgbgHF5pb0mrwtz0/edit?usp=sharing">
                <h1> Optimizing Program Performance </h1>
            </Card>

            <Card type="book" link="https://docs.google.com/document/d/1NIpkcDL1sh6DUTqJAO8l62H_m15u2cbiNHnA6lRjhuo/edit?usp=sharing">
                <h1> Morality With Respect to Artificial Consciousness</h1>
            </Card>

            <Card type="book" link="https://docs.google.com/document/d/1_JSIU8-iyQ4JgQEebUF4gWj5Y7reADqGK-xLb8V0Pt4/edit?usp=sharing">
                <h1> The Practical Programming Guide </h1>
            </Card>
            </div>









            <div className={classes.books}>
            <h3> Web </h3>
            <Card type="book2" link="https://docs.google.com/document/d/1zAoxnhQZuWuSWs9ZJznafsLOv9SjsJZf9iM1D_WKhS4/edit?usp=sharing">
                <h1> Intro to Web Design: HTML5 and CSS3 </h1>
            </Card>

            <Card type="book2" link="https://docs.google.com/document/d/1NR3oNuCb6YQPK8GzT22SvWTiaP_4WM3VPgPUrWR1LLA/edit?usp=sharing">
                <h1>The Web 2.0: Javascript, Ajax & RESTful API</h1>
            </Card>

            <Card type="book2" link="https://docs.google.com/document/d/1rGwxg2cO9KTfhjKzp43l6_OIkw4D-Np5DII6aoaEgv4/edit?usp=sharing">
                <h1> Intro to React Js </h1>
            </Card>

            <Card type="book2" link="https://docs.google.com/document/d/18MJYNO7RWbkP6olVFVem-3zYH0DCeSOIJoQo1YLeDNY/edit?usp=sharing">
                <h1> Intermediate React Js </h1>
            </Card>

            <Card type="book2" link="https://docs.google.com/document/d/1l26H3M5X0wv7LnOpREv5Y9MA_AoiwSAvkzTAJ5QI5nY/edit?usp=sharing">
                <h1> Back End Notes </h1>
            </Card>
            </div>









            <div className={classes.books}>
            <h3> Other </h3>

            <Card type="book3" link="https://firebasestorage.googleapis.com/v0/b/portfolio-35d79.appspot.com/o/epistemology.pdf?alt=media&token=7feaaadf-3229-4468-8a73-0fc94852efd0">
                <h1> Epistemology: The Theory of Knowledge </h1>
            </Card>

            <Card type="book3" link="https://firebasestorage.googleapis.com/v0/b/portfolio-35d79.appspot.com/o/jtb.pdf?alt=media&token=9b298a4f-114e-4929-94fe-cf1d5ccc39f3">
                <h1> Epistemology: Justified True Beliefs </h1>
            </Card>


            <Card type="book3" link="https://firebasestorage.googleapis.com/v0/b/portfolio-35d79.appspot.com/o/voltagespinrrate.pdf?alt=media&token=73b3f988-4fc0-4aa3-943f-2f518cb528fd">
                <h1> The effect of Voltage on Spin Rate </h1>
            </Card>

            <Card type="book3" link="https://firebasestorage.googleapis.com/v0/b/portfolio-35d79.appspot.com/o/frenchandwar.pdf?alt=media&token=71ad872b-3a3e-4ceb-bc0b-8265f045ba5a">
                <h1>The American Revolution </h1>
            </Card>

            <Card type="book3" link="https://firebasestorage.googleapis.com/v0/b/portfolio-35d79.appspot.com/o/Iran.pdf?alt=media&token=638cecfb-2134-43aa-96fb-d11502a547f5">
                <h1> The Iranian Revolution </h1>
            </Card>
            <Card type="book3" link="https://docs.google.com/document/d/1LgGbsI5Gr0GEzb0lyizAgxVgDtjZxo7J804xrl94Ay0/edit?usp=sharing">
                <h1> Finance for Techies </h1>
            </Card>
          </div>


      </div>
    </Aux>

  );

}
}

export default ebooks;
