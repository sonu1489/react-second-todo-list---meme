import React, { Component } from 'react';
 class Click extends Component {
     constructor(){
         super()
         this.state={
             count:0    
         }
     }
     handleIncrement=(e)=>{
         e.preventDefault()
        //  console.log(e);
        // this.setState({count:this.state.count + 1})
        this.setState(prevState=>{
            return {
                count: prevState.count+1
            }
        })
     }
     render() { 
         return <div>
             <h1>{this.state.count}</h1>
             <button onClick={this.handleIncrement}>click</button>
         </div>;
     }
 }
  
 export default Click ;