import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Task from './../components/Task/index'
import FilterLink from './../components/FilterLink/index'
import { fetchTasks, addTask, deleteTask } from './../store/modules/tasks'
import { setVisibilityFilter } from './../store/modules/filter'

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

  addTask(e){
    e.preventDefault()
    const { dispatch } = this.props
    const { name, author } = this.refs
    dispatch(addTask(name.value, author.value))
  }

  deleteTask(index){
    const { dispatch } = this.props
    dispatch(deleteTask(index))
  }

  setVisibilityFilter(filter){
    const { dispatch } = this.props
    dispatch(setVisibilityFilter(filter))
  }


  render() {
    const { tasks } = this.props
    return (
      <div>
        <div><Link to="/about">• About</Link></div>&nbsp;
        <div>
          <form onSubmit={::this.addTask}>
            <input ref="name" placeholder="Name" />&nbsp;
            <input ref="author" placeholder="Author" />&nbsp;
            <button type="submit">Valider</button>
          </form>
          <ul>
            { tasks.map((task, index) => (
              <Task
                key={index}
                index={index}
                name={task.name}
                author={task.author}
                completed={task.completed}
                deleteTask={::this.deleteTask}
                />
            )) }
          </ul>
          <div>
            <strong>Show: </strong>
            <FilterLink filter='All' setVisibilityFilter={::this.setVisibilityFilter}/>
            <FilterLink filter='Active' setVisibilityFilter={::this.setVisibilityFilter}/>
            <FilterLink filter='Completed' setVisibilityFilter={::this.setVisibilityFilter}/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  tasks: state.tasks
}))(HomeContainer)
