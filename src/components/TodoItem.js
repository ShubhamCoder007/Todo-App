import React, { Component } from 'react'
import PropType from 'prop-types'
import 'tachyons'

class TodoItem extends Component {

    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            textDecoration: this.props.todo.completed ?
            'line-through' : '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted'
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' onChange={this.props.markComplete.bind(this, this.props.todo.id)}/> {' '}
                    <div className='grow shadow-100 tc b'>{this.props.todo.title}</div>
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, this.props.todo.id)}>X</button>
                </p>
            </div>
        )
    }
}


const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

// TodoItem.PropType = {
//     todo: PropType.object.isRequired
// }

export default TodoItem
