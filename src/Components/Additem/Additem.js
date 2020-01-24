import React ,{Component} from 'react';

import './Additem.css';

class Additem extends Component{
    state={
        name:"",
        age:""
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    addItem=(e)=>{
        e.preventDefault();
        this.setState({
            id:Math.random()
        })
        this.props.addItem(this.state)
        this.setState({
            id:"",
            name: "",
           age:""


        })
    }
    
    render(){
        return(
            <div className="add-item">
                
                <form className="row" onSubmit={this.addItem}>

                    <input type="text" className="col-5" id="name" onChange={this.handleChange}  placeholder="Enter Name ..." value={this.state.name} required />
                    <input type="numbert"  className="col-4" id="age"onChange={ this.handleChange}  placeholder="Enter Age ..."value={this.state.age} required />
                    <input type="submit" value="Add List" className="col-3 " />
                </form>
               
                


            </div>

        )
    }
}

export default Additem;
