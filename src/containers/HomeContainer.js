import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Task from './../components/Task/index'
import { fetchTasks, deleteTask, addTask } from './../store/modules/tasks'

class HomeContainer extends Component {
  state = {
    tasks: [],
  }

  componentWillMount(){
    const { dispatch, tasks } = this.props
    if (tasks.length === 0) {
      dispatch(fetchTasks())
    }
  }

  // _onSubmit(e){
  //   e.preventDefault()
  //   const {name, author} = this.refs
  //   const { tasks } = this.state
  //   tasks.push({
  //     name: name.value,
  //     author: author.value,
  //   })
  //   this.setState({tasks})
  //   console.log(`Name: ${name.value}`)
  //   console.log(`Author: ${author.value}`)
  // }

  addTask(e){
    e.preventDefault()
    const { dispatch } = this.props
    const { name, author } = this.refs
    dispatch(addTask(name.value, author.value))
  }

  deleteTask(index){
    const { dispatch } = this.props;
    console.log(this.props);
    dispatch(deleteTask(index))
  }



  render() {
    const { tasks } = this.props
    return (
      <div>
        <form onSubmit={::this.addTask}>
          <input ref="name" placeholder="Name" />
          <input ref="author" placeholder="Author" />
          <button type="submit">Valider</button>
        </form>
        <ul>
          { tasks.map((task, index) => (
            <Task
              key={index}
              index={index}
              name={task.name}
              author={task.author}
              deleteTask={::this.deleteTask}
            />
          )) }
        </ul>
        <Link to="/about">About</Link>
      </div>
    );
  }
}

export default connect(state => ({
  tasks: state.tasks
}))(HomeContainer)
