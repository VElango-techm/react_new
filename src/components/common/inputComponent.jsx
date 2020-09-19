
import React, { Component } from 'react';
import Header from '../dashboard/header/Header';
import './input.css';
class InputComponent extends Component{
    constructor(props){
        super(props);

        this.state={
          
        }
    }
    inputHandleChange=(e)=>{
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if ( re.test(e) ) {
            // this is a valid email address
            // call setState({email: email}) to update the email
            // or update the data in redux store.
            this.setState({
                inputdata:e
            })
        }
        else {
            // invalid email, maybe show an error to the user.
        }
      //Mobile number validation

      const isInteger = /^[0-9]+$/;
      if (e.target.value === '' || isInteger.test(e.target.value)) {
        this.setState({ inputdata: e.target.value })
      }

      //Alphanumeric validation
      var RegEx = /[^a-z\d]/i;
      if (e.target.value === '' || RegEx.test(e.target.value)) {
        this.setState({ inputdata: e.target.value })
      }
    }
    render(){
       //console.log('11111111111111',this.props.location.state.name);
       //const placeName=this.props.location.state;
        return(
            <div className='input-box'>
                <Header/>
                {/* <LeftNav /> */}
               <input className='input-data' type='text'  placeholder={this.props.location.state.name} onChange={this.inputHandleChange}/>
            </div>
        )
    }
}

export default InputComponent;