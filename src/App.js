import React, { PureComponent } from 'react';
import Create from './Create'
import TodoUl from './TodoUl'
import State from './State'
import './App.css'

class App extends PureComponent {
    state = {
        data: [
            {
                id: 0,
                text: "数据内容",
                done: false
            }, {
                id: 1,
                text: "数据内容2",
                done: true
            }, {
                id: 2,
                text: "数据内容3",
                done: false
            }
        ]
    }

    //add text in list, using in Create component
    addData = (text) => {
        let { data } = this.state
        data.unshift({
            id: Date.now(),
            text,
            done: false
        })
        this.setState({
            data: [...data]
        })
    }

    //checkbox =>change data.done state, using in Li component
    changeDone = (id, done) => {
        let { data } = this.state
        data.filter(item => item.id === id)[0].done = done
        this.setState({
            data: data.map(item => ({ ...item }))
        })

    }

    //edit text when user double click item. using in Li component
    editText = (id, text) => {
        let { data } = this.state
        data.forEach(item => {
            if (item.id === id) {
                item.text = text
            }
        })
        this.setState({
            data: data.map(item => ({ ...item }))
        })
    }

    //delete data. click X button at end of each item. using in Li component
    deleteData = (id) => {
        let { data } = this.state
        this.setState({
            data: data.filter(item => item.id !== id)
        })
    }


    //clear compleated items. using in State component
    removeDone = () => {
        let { data } = this.state
        this.setState({
            data: data.filter(item => !item.done)
        })
    }

    render() {
        let { data } = this.state
        return (<div id="todoapp" >
            <div className="title">
                <h1>Todo list</h1>
            </div>
            <div className="content">
                <Create addData={this.addData} />
                <TodoUl
                    {...this.state}
                    changeDone={this.changeDone}
                    deleteData={this.deleteData} 
                    editText = {this.editText}/>
                <State
                    data={data}
                    removeDone={this.removeDone}
                />
            </div>
        </div>)
    }

}

export default App;
