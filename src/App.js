import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo';
import uuid from 'uuid'
import About from './components/pages/About'

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Dust bin',
        completed: false
      },
      {
        id: 2,
        title: 'node js',
        completed: false
      },
      {
        id: 3,
        title: 'React js',
        completed: true
      }
    ]
  }

  //marking the todo as complete by toggling with the completed boolean field
  markComplete = (id) => {
    this.setState ({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  //deleting todos    using spread operator to spread all the datas and then filter out and reassign based 
  //on requirements of condition
  delTodo = (id) => {
    this.setState ({
      todos: [...this.state.todos.filter(todo => todo.id !== id
      )]
    });
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }

    this.setState ({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />

            <Route exact path="/" render = {(props) => (
              <>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
              </>
            )}/>

            <Route path="/about" Component={About}/>
            
          </div>
        </div>
      </Router>
    )
  }
  
}

export default App;
