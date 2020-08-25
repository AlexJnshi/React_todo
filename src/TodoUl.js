import React,{PureComponent} from 'react';
import Li from './Li';
class Todos extends PureComponent {
  render(){
    let {data,changeDone,deleteData,editText} = this.props
    return (<ul id="todo-list">
        {data.map(item=>
        <Li 
            key={item.id} 
            data={item} 
            changeDone={changeDone}
            deleteData={deleteData}
            editText={editText}
        />)}
    </ul>)
  }
}

export default Todos;
