import React from 'react';
import './Todolist.css';

function Todolist(props) {
    let {items}=props;
    let length= items.length;
    let itemLest=length?items.map(item =>{
        return(
            <div className="row p-1 border-bottom" key={Math.random()}>
                <div className="col-5">{item.name}</div>
                <div className="col-4">{item.age}</div>
                <div className="col-3 delet-item" onClick={()=>props.deletItem(item.id)}>&times;</div>
               
            </div>
        )
    }):(<div className="no-item card">ther is no item to show</div>)
  return (
    <div className="todolist text-capitalize">
        <div className="row " key={Math.random()}>
            <div className="col-5">name</div>
            <div className="col-4">age</div>
            <div className="col-3">action</div>
               
        </div>
       {itemLest}
    </div>
  );
}

export default Todolist;
