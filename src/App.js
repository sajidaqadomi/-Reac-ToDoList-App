import React,{Component} from 'react';
import Todolist from './Components/Todolist/Todolist'
import Additem from './Components/Additem/Additem'
import './App.css';

class App extends Component {
  state={
    items:[
      {id:1,name:"mohamad",age:23},
      {id:2,name:"sami",age:26},
      {id:3,name:"shadi",age:30}
    ]
  }
  addItem=(item)=>{
    let {items}=this.state;
    items.push(item);
    this.setState({
      items
    })

  }

  deletItem=(id)=>{
    let {items}=this.state;
    let index=items.findIndex(item=> item.id===id
    )
    items.splice(index,1);
    this.setState({
      items
    })

  }
  render(){
    return (
      <div className="App bg-blue  ">

        <h1 className="App-header " >Todolist App</h1>
        
       <div className="APP-list">
       <div className="container"> 
       
       <Todolist items={this.state.items} deletItem={this.deletItem}/>
        <Additem  addItem={this.addItem} />
       </div>
      
        </div>
      </div>
    );

  }
  
}

export default App;
