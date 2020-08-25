import React, { PureComponent, createRef } from 'react';
class Li extends PureComponent {
    state = {
        editing: false,
        ref: createRef(),
        val: ''
    }

    //copy value from props to it's own state
    static getDerivedStateFromProps(props, state) {
        if (!state.editing) {
            state.val = props.data.text
        }
        return true;
    }

    //get focus when user double click on item
    componentDidUpdate(prevProps, prevState) {
        if (this.state.editing && !prevState.editing) {
            this.state.ref.current.focus()
        }
    }

    render() {
        let { val, ref, editing } = this.state
        let { data, changeDone, deleteData, editText } = this.props

        return (
            <li
                className={editing ? 'editing' : ''}
                onDoubleClick={() => {
                    this.setState({
                        editing: true
                    })
                }
                }
            >
                {/* display mode */}
                <div className={"todo " + (data.done ? 'done' : '')}>
                    <div className="display">
                        <input
                            className="check"
                            type="checkbox"
                            checked={data.done}
                            onChange={(e) => {
                                changeDone(data.id, e.target.checked)
                            }}
                        />
                        <div
                            className="todo-content"
                        >{data.text}</div>
                        <span
                            className="todo-destroy"
                            onClick={() => {
                                deleteData(data.id)
                            }

                            }></span>
                    </div>

                    {/* editing mode */}
                    <div className="edit">
                        <input
                            ref={ref}
                            className="todo-input"
                            type="text"
                            value={val}
                            onChange={(e) => {
                                this.setState({
                                    val: e.target.value
                                })
                            }}
                            onBlur={() => {
                                editText(data.id, val)
                                this.setState({
                                    editing: false
                                })
                            }}
                            onKeyDown={(e) => {
                                if (e.keyCode === 13) {
                                    editText(data.id, val)
                                    this.setState({
                                        editing: false
                                    })
                                }
                            }}

                        />
                    </div>
                </div>
            </li>
        )
    }
}

export default Li;
