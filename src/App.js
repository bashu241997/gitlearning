import React from 'react';
import { Home } from "./components/Hoe";
import './App.css';

function App() {
  return (
  <div className="app">

  <Home /></div>
  );
}
// export class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       val:""
//     }
//   }

//   change =(e)=>{
//     if(e.target.value == 3){
//       this.setState({val:""})
//     }else{
//       this.setState({val:e.target.value})
//     }
//   }
//   render(){
//     return(
//       <>

//       <select value={this.state.val} onChange={e=> this.change(e)}>
//       <option value="">select</option>
//         <option value="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//         <option value="4">4</option>
//       </select>
//       <div>{this.state.val}</div>
//       </>
//     )
//   }
// }


export default App;
