import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const todos = [
  {
    task: "dishes",
    id: 111,
    completed: false,
  },
  {
    task: "laundry",
    id: 222,
    completed: false,
  },
  {
    task: "cooking",
    id: 333,
    completed: false,
  },
  {
    task: "shopping",
    id: 444,
    completed: false,
  },
];
console.log(todos);
class App extends React.Component {
  // this component is going to take care of state, and any change handlers you need to work with your state

  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todos: todos,
    };
  }

  // add new item when user enters value into input field, the ellipses ... copy over the previous values
  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newItem],
    });
  };

  // causes the font to change from normal to striked to look like it's been crossed off and done
  toggleItem = (itemId) => {
    console.log(itemId);
    // map over array
    // when we find the item we clicked, toggle the completed field
    // otherwise return the item untouched
    this.setState({
      todos: this.state.todos.map((item) => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };

  // deletes all the crossed off items
  clearCompleted = (e) => {
    e.preventDefault(); // prevents page from refreshing
    // if item is completed (item.completed is true) then filter out
    this.setState({
      todos: this.state.todos.filter((item) => !item.completed),
    });
  };

  // design `App` to be the parent component of your application.
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          todos={this.state.todos}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearcompleted}
        />
      </div>
    );
  }
}

export default App;
