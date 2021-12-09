// import React, { Component } from 'react';

// import FormComponent from './formComponent';
// class FormContainer extends Component {
//        constructor(){
//          super()
//          this.state={
//            firstName:"",
//            lastName:"",
//            age:"",
//            gender:"",
//            destination:"",
//            dietaryRestriction:{
//              isVegan:false,
//              isKosher:false,
//              isLoctasFree:false
//            }
  
//          }
//        }
//        handleChange=(e)=>{
//          const {name,value,type,checked} = e.target
//          type === "checkbox" ? 
//          this.setState(prevState=>{ return {
//             dietaryRestriction:{...prevState.dietaryRestriction,[name]:checked} } }) : this.setState({[name] : value})
//        }
//        render() { 

//         return (
//         <FormComponent handleChange={this.handleChange} {...this.state}/>
//         )
         
         
//        }
//      }
      
//      export default FormContainer;