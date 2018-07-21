import React, {Component} from 'react';
import classes from './Projects.css';
import Aux from '../../hoc/Aux';
import axios from 'axios';
import Card from '../../UI/Card/Card';
import { Parallax } from 'react-scroll-parallax';



class projects extends Component{


  state={
    page:0,
    array:['','']
  }

  /* 0-6, 6-12, 12-24
  */
  componentDidMount(){
    axios.get("https://portfolio-35d79.firebaseio.com/projects.json")
          .then(response => {
              let p = this.state.page;
              let projects=response.data.slice(p*4,p*4+4);
              this.setState({array: projects})
          });
  }



  pageChange=(props)=>{


    axios.get("https://portfolio-35d79.firebaseio.com/projects.json")
          .then(response => {
            let n =0; let b =0;
              let p = this.state.page;
              /*next page*/
              n = p+1;
              let projects=response.data.slice(n*4,n*4+4);

              /*back page*/
              b = p-1;
              let projectsb=response.data.slice(b*4,b*4+4);

              if(projects[0] && props===1){

                this.setState({array: projects, page:n} );
              }

              if(projectsb[0] && props===-1){

                this.setState({array: projectsb, page:b} );
              }

          });

  }

  render(){



    let projects= this.state.array;

    /*
    The data schema for projects looks like this:
    [Name, img src, description, link to project]
    */

    let projectCards = projects.map(project=>{
      return (
        <Card type="project">

            <h2>{project[0]}</h2>

            <div className={classes.wrapper}>
              <img src={project[1]}/>
                <p>{project[2]}</p>
            </div>

            <a href={project[3]}> View Project &rarr;</a>

        </Card>);
    });

    return(
            <div id="Projects" className={classes.pageContainer}>
            <h1> Projects </h1>



              <div className={classes.projectsContainer}>
                {projectCards}
              </div>


                  <div onClick={this.pageChange.bind(this,-1)} className={classes.previous}>&laquo; Previous</div>
                  <div onClick={this.pageChange.bind(this,1)} className={classes.next}>Next &raquo;</div>








            </div>
        );
      }
}

export default projects;
