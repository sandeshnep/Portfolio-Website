import React, {Component} from 'react';

import NavigationBar from '../Navigation/NavigationBar';
import Dots from '../Navigation/Dots/Dots';
import classes from './Layout.css';
import Drawer from '../Navigation/Drawer/Drawer.js';
import { ParallaxProvider } from 'react-scroll-parallax';


class layout extends Component{

  state={
    drawer_open: false,

  }


  drawerHandler=()=>{
    this.setState((prevState, props)=>({
      drawer_open: !prevState.drawer_open
    }))

  }

  /**Logic for updating the state when scrolling to different parts of the page in the Y axis**/
  componentDidMount() {

    let width = window.innerWidth;
    let ratio = 1;
    if (width < 1300 && width >1000){
      ratio = 1.2;
    }
    else
      if(width < 1000 && width >500){
      ratio=1.4;
    }
    else if(width < 500){
    ratio=1.7;
  }

  
    document.addEventListener('scroll', () => {
      let onView ='Home';
      let scrollamt = window.scrollY;

      switch(true){
        case (scrollamt<ratio*300):
          onView="Home";
          break;

        case(scrollamt>ratio*300 && scrollamt<ratio*1400):
          onView="Skills";
          break;

        case(scrollamt>ratio*1400 && scrollamt <ratio*2000):

          onView="Project";
          break;

        case(scrollamt>ratio*2000 && scrollamt<ratio*2800):
            onView="Contact";

          break;

        case(scrollamt>ratio*2800):
            onView="ebooks";

          break;

      }

      if(onView!==this.state.inView){

        this.setState({inView: onView})

      }
    });
  }

  render(){
    return(
      <ParallaxProvider>
        <div className={classes.everything}>
          <NavigationBar/>

              <main className={classes.pages}>
                  {this.props.children}
              </main>


                  <div className={classes.dots} >
                    <Dots current={this.state.inView}/>
                  </div>

        </div>
      </ParallaxProvider>


    );
  }


};

export default layout;
