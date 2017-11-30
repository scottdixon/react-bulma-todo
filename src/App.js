import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Input } from 'reactbulma'
import Header from './components/Header';


class App extends Component {
  
  state = {
    tasks: ['Do the washing', 'Walk the dog'],
    searchPhrase: ''
  }

  onChangeQuery = (event) => {
    // Update the state with our search query!
    this.setState({
      searchPhrase: event.target.value
    })
  }

  addTask = (event) => {
    // Stop the browser from submitting the form!
    event.preventDefault();
    
    // Make a copy of the current tasks
    const currentTasks = [...this.state.tasks];

    // Add the new task to our copy of tasks
    currentTasks.push(this.state.searchPhrase);

    // Update the state with the new tasks
    // and reset search
    this.setState({
      tasks: currentTasks,
      searchPhrase: ''
    })

  }

  render() {

    const { tasks, searchPhrase } = this.state;

    return (
      <div className="App">
        
        <Header totalIncomplete={ tasks.length } />

        <form onSubmit={ this.addTask }>
          <Input primary large 
            placeholder="search / add a todo!"
            value={ searchPhrase }
            onChange={ this.onChangeQuery }
            />
        </form>

        {
          tasks
          .filter(myTask => myTask.includes(searchPhrase))
          .map(myTask => <p>{myTask}</p>)
        }

      </div>
    );
  }
}

export default App;
