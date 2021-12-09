import React, { Component } from 'react';
import './App.css';
import Todoitem from "./components/Todoitem"
import Contactcard from './components/Contactcard';
import Jokes from './components/Jokes'
import Product from './components/product'
import productData from "./components/Productdata"
import TodoData from './components/TodoData'
import Click from './components/click'

// *************todo project*************
export default class App extends Component{
    constructor(){
      super()
      this.state = {
        todos: TodoData
      }
    }

    handleChange=(id)=>{
       const updateTodo=this.state.todos.map(todo=>{
        if (todo.id === id){
         todo.completed = !todo.completed
        }
        return todo;
      })
       this.setState({todos:updateTodo})

    }
// // ******** or******
// handleChange=(id)=>{
//   this.setState(prevState => {
//     console.log(prevState);
//   const updateTodo =  prevState.todos.map(todo=>{
//       if (todo.id === id){
//              todo.completed = !todo.completed
//             }
//             return todo
//     })
//     return {
//       todos:updateTodo
//     }

//   })
// }
render(){
  const TodoItem = this.state.todos.map(item => <Todoitem  key={item.id} item={item} handleChange={this.handleChange} />)
return (
     <div className="todo-list">
     {TodoItem}
     {/* <Click/> */}
     </div>
);
}
}

// ***************meme generator***********
// import Header from './components/Header'
// import MemeGenerator from './components/memeGenerator';
// class App extends Component {
//   render() { 
//     return <div>
//       <Header/>
//       <MemeGenerator/>
//     </div>;
//   }
// }
 
// export default App;

// *************************** form 2 practice********
// import FormContainer from './components/formContainer';
// class App extends React.Component {
//   render() { 
//     return <div>
//       <FormContainer/>
//     </div>;
//   }
// }
 
// export default App;

  //  class App extends React.Component {
  //    constructor(){
  //      super()
  //      this.state={
  //        firstName:"",
  //        lastName:"",
  //        age:"",
  //        gender:"",
  //        destination:"",
  //        dietaryRestriction:{
  //          isVegan:false,
  //          isKosher:false,
  //          isLoctasFree:false
  //        }

  //      }
  //    }
  //    handleChange=(e)=>{
  //      const {name,value,type,checked} = e.target
  //      type === "checkbox" ? 
  //      this.setState(prevState=>{ return {
  //         dietaryRestriction:{...prevState.dietaryRestriction,[name]:checked} } }) : this.setState({[name] : value})
  //    }
  //    render() { 
  //      return <main>
  //      <form>
  //        <input name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="first Name"/><br/>
  //        <input name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="last  Name"/><br/>
  //        <input name="age" value={this.state.age} onChange={this.handleChange} placeholder="age"/><br/>
  //        <label>male:
  //        <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange}/>
  //        </label><br/>
  //        <label>female:
  //        <input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange}/>
  //        </label>
  //        <br/>
  //        <label>
  //        <select value={this.state.destination}
  //        name="destination"
  //                 onChange={this.handleChange}
  //                 >
  //               <option  value="null">Destination</option>
  //               <option value="germany">Germany</option>
  //               <option value="norway">Norway</option>
  //               <option value="india">India</option>
  //               <option value="america">America</option>
  //        </select>
  //             </label>
  //             <br/>
  //             <label>
  //               <input type="checkbox" name="isVegan" onChange={this.handleChange} checked={this.state.dietaryRestriction.isVegan}/>
  //             </label> Vegan?
  //             <br/>
  //             <label>
  //               <input type="checkbox" name="isKosher" onChange={this.handleChange} checked={this.state.dietaryRestriction.isKosher}/>
  //             </label> Kosher?
  //             <br/>
  //             <label>
  //               <input type="checkbox" name="isLoctasFree" onChange={this.handleChange} checked={this.state.dietaryRestriction.isLoctasFree}/>
  //             </label> loctasfree?
  //             <br/>
              
        
              
  //      </form>
  //      <hr/>
  //      <h2>Enter Information:</h2>
  //      <p>Your name: {this.state.firstName}{this.state.lastName}</p>
  //      <p>your age: {this.state.age}</p>
  //      <p>your gender: {this.state.gender}</p>
  //      <p>Your destination : {this.state.destination}</p>
  //      <p>Your dietary restriction : </p>
  //       <p> vegan:{this.state.dietaryRestriction.isVegan ? "yes" :"NO"}</p>
  //       <p> Kosher:{this.state.dietaryRestriction.isKosher ? "yes" :"NO"}</p>
  //        <p>loctasfree:{this.state.dietaryRestriction.isLoctasFree ? "yes" :"NO"}</p>
        
  //      </main>
       
       
  //    }
  //  }
    
  //  export default App;


// *********form*******
// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       firstName: "",
//       lastName: "",
//       isFriendly: false,
//       gender: "",
//       favColor:"blue"
//     }
//   }
//   handleChange = (e) => {
//     const { name, value, type, checked } = e.target
//     type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({
//       [name]: value
//     })

//   }
//   render() {

//     return <form onSubmit={this.handleSubmit}>
//       {/* formik */}

//       <input type="text"
//        placeholder="enter firstName"
//        value={this.state.firstName}
//        name="firstName"
//        onChange={this.handleChange} />

//       <br />

//       <input type="text"
//        placeholder="enter lastName"
//        value={this.state.lastName}
//        name="lastName"
//        onChange={this.handleChange} />
       
//       <br />

//       <textarea 
//       value={"some dafault text"} 
//       onChange={this.handleChange} />

//       <br />

//       <label>

//         <input type="checkbox" 
//         name="isFriendly" 
//         checked={this.state.isFriendly} 
//         onChange={this.handleChange} /> 
//         isFriendly
//       </label>

//       <br />

//       <label>
//         <input type="radio" 
//         name="gender" 
//         value="male" 
//         checked={this.state.gender === "male"} 
//         onChange={this.handleChange} /> 
//         male
//       </label>

//       <br />

//       <label>
//         <input type="radio" 
//         name="gender" 
//         value="female" 
//         checked={this.state.gender === "female"} 
//         onChange={this.handleChange} /> 
//         Female
//       </label>

//       <br />

//       <label>favColor: 
        
//       <select value={this.state.favColor}
//           onChange={this.handleChange}
//           name="favColor">
//         <option value="Blue">Blue</option>
//         <option value="green">green</option>
//         <option value="red">red</option>
//         <option value="yellow">yellow</option>
//       </select>
//       </label>

//       <h1>{this.state.firstName}
//           {this.state.lastName}
//       </h1>

//       <h1>you are {this.state.gender}</h1>
//       <button>Submit</button>
//     </form>
//   }
// }

// export default App;

// ************************

  // class App extends Component {
  //   constructor(){
  //     super()
  //     this.state={
  //       isLoading:false,
  //       charactor:{}
  //     }
  //   }
  //   componentDidMount(){
  //     this.setState({
  //       isLoading:true
  //     })
  //     fetch("https://jsonplaceholder.typicode.com/users/1")
  //     .then(res =>res.json())
  //     .then(data=>{
  //       this.setState({
  //         isLoading:false,
  //         charactor:data
  //       })
  //     })
  //   }
  //   render()
  //      { 
  //          const Text = this.state.isLoading ? "loading..." : this.state.charactor.name
  //     return <div>
  //       {Text}
  //     </div>;
  //   }
  // }

  // export default App;




//********************************* */
// class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       isLoggedIn:false
//     }
//   }
//    handleChange=()=>{
//      this.setState(prevState=>{
//      return {
//        isLoggedIn : !prevState.isLoggedIn
//      }
//      })
//    }

//   render() { 
//     let displayText = this.state.isLoggedIn ? "logged in" : "logged out"
//     return <div>

//       <button onClick={this.handleChange}> 
//         {this.state.isLoggedIn  ? " logged out" : " Logged in"}
//       </button>
//       <h1>{displayText}</h1>

//     </div>;
//   }
// }

// export default App;
// 

/* // ****************************** */
/* // function App() { */
/* //   // const ProductComponent = productData.map(item=><Product key={item.id} product={item} />) */
/* //   return (
//     <div className ="App"> */
/* //        {ProductComponent} */


/* ************************************************** */
/* <Jokes puncline="i dont know what the flag"/>
<Jokes Question="What's the best thing about switerland?" puncline="i dont know what the flag is a plus point"/>
<Jokes Question="What's the best thing about switerland?" puncline="i dont know what the flag is a plus point"/>
<Jokes Question="What's the best thing about switerland?" puncline="i dont know what the flag is a plus point"/>
<Jokes Question="What's the best thing about switerland?" puncline="i dont know what the flag is a plus point"/>
*/

/* ********************************** */
/* <div className = "contact-card">
<img src="" alt="image"/>
<h3>mr. wishkershon</h3>
<p>phon no. (222) - 38277</p>
<p>Email:example@gamil</p>
</div> */

/* <Contactcard  contact={{name:"mr. wishkershon", imgURL:"http://placekitten.com/300/200", phoneno:"(222) - 38277", email:"example@gamil"}}/>
<Contactcard  contact={{name:"mr. wishkershon", imgURL:"http://placekitten.com/300/200", phoneno:"(222) - 38277", email:"example@gamil"}}/>
<Contactcard  contact={{name:"mr. wishkershon", imgURL:"http://placekitten.com/300/200", phoneno:"(222) - 38277", email:"example@gamil"}}/>
<Contactcard  contact={{name:"mr. wishkershon", imgURL:"http://placekitten.com/300/200", phoneno:"(222) - 38277", email:"example@gamil"}}/> */



