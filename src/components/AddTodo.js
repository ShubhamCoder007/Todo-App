import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        title : ''
    }

    onChangeHandler = (event) => {
        this.setState ({
            [event.target.name]: event.target.value
        })
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState({title: ''})
    }

    render() {
        return (
            <form style={{display: 'flex'}} onSubmit={this.onSubmitHandler}>
                <input type="text" name="title" placeholder="Add Todo" style={{flex: '10', padding:'5px'}}
                value={this.state.title} onChange={this.onChangeHandler}/>
                <button type="submit" value="Submit" className="btn" style={{flex: '1'}}>Add</button>
            </form>
        )
    }
}

export default AddTodo
