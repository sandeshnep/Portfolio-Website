import React, {Component} from 'react';
import classes from './Card.css';
import Aux from '../../hoc/Aux';




class Card extends Component {





  render(){
  let type= classes.card;
  if(this.props.type==='skill'){
    type = classes.skill;
  }
  else if (this.props.type==='project'){
    type=classes.project;
  }
  else if(this.props.type==='book'){
    type=classes.book;
  }
  else if(this.props.type==='book2'){
    type=classes.book2;
  }
  else if(this.props.type==='book3'){
    type=classes.book3;
  }


    return(
      <Aux>
        <a href={this.props.link}>
            <div className={type}>
              {this.props.children}
            </div>
        </a>
      </Aux>
    );
    }
}

export default Card;
