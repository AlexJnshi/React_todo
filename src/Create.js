import React,{PureComponent} from 'react';
class Create extends PureComponent {
  render(){
      let {addData} = this.props
    return (<div id="create-todo">
        <input 
          id="new-todo" 
          placeholder="What needs to be done?" 
          autoComplete="off"
          type="text" 
          onKeyDown={(e)=>{
            if(e.keyCode === 13){
                addData(e.target.value)
                e.target.value = ''
            }
          }}
        />
    </div>)
  }
}

export default Create;
