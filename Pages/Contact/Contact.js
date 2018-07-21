import React, {Component} from 'react';
import classes from './Contact.css';
import Aux from '../../hoc/Aux';
import axios from 'axios';

class contact extends Component{
  state={
    name: 'Full Name',
    email: 'Email',
    phone:'Phone',
    message:'Message',
    sent: false,
    counter: 0 /*0 means untouched, 1 is touched*/
  }

  handleChange(event){
    if(event.target.type==="text"){
      this.setState({name: event.target.value});
    }
    else
      if(event.target.type==="email"){
        this.setState({email: event.target.value});
      }
      else
        if(event.target.type==="tel"){
          this.setState({phone: event.target.value});
        }
        else
          if(event.target.type==="textarea"){
            this.setState({message: event.target.value});
          }

    }




  handleSubmit(event){
    event.preventDefault();
    let data = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message,
    }

    axios.post("https://portfolio-35d79.firebaseio.com/contact.json", data).then(response=> {
      this.setState({sent:true});
    })

  }


render(){
  let thanks= "";

  if(this.state.sent){
    thanks= (<div className={classes.thanks}> Thank You! Your message has been sent successfuly! I will contact you shortly. </div>);
  }

  return(


<div id="Contact" className={classes.pageContainer}>

<h1> Contact Me </h1>
<h2> Let's work together. I am now available for new projects. </h2>


{thanks}
<div className={classes.form}>
  <form onSubmit={this.handleSubmit.bind(this)}>


     <input type="text" value={this.state.name} onChange={(event)=> this.handleChange(event)} onClick={(event)=>{

       let val = this.state.name;
       if(this.state.name==="Full Name"){
         val = "";
       }
       return(event.target.value=val);
       }}/>


      <input type="email" value={this.state.email} onChange={(event)=> this.handleChange(event)} onClick={(event)=> {
      let val = this.state.email;
       if(this.state.email==="Email"){
         val = "";}
       return(event.target.value=val);}}/>


       <input type="tel" value={this.state.phone} onChange={(event)=> this.handleChange(event)} onClick={(event)=> {
       let val = this.state.phone;
        if(this.state.phone==="Phone"){
          val = "";}
        return(event.target.value=val);}}/>


        <textarea rows="9" cols="45" value={this.state.message} onChange={(event)=> this.handleChange(event)} onClick={(event)=> {
        let val = this.state.message;
         if(this.state.message==="Message"){
           val = "";}
         return(event.target.value=val);}}/>

      <input type="submit" value="Submit" className={classes.submit}/>

      </form>
</div>




  </div>

    );
  }
}

export default contact;
