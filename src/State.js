import React, { PureComponent } from 'react';
class State extends PureComponent {
    render() {
        let { data, removeDone } = this.props
        let done = data.filter(item => item.done)
        let unDone = data.filter(item => !item.done)
        return (<div id="todo-stats">
            <span className="todo-count">
                <span className="number">{unDone.length}</span>
                <span className="word">{unDone.length > 1 ? " items" : " item"} left.</span>
            </span>
            <span className="todo-clear">
                {done.length > 0 && <button onClick={() => {
                    removeDone()
                }}>
                    Clear {done.length} completed {done.length > 1 ? 'items' : 'item'}
                </button>}
            </span>
        </div>)
    }
}

export default State;
