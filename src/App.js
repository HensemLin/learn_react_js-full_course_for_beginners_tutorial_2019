// import logo from './logo.svg';o
import './App.css';
import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoItems from './components/TodoItem';
import data from './components/Data';
import Conditional from './components/Conditional';
import React from 'react';

// function App() {
//   const todoComponents = data.todosData.map((item) => {
//     return (
//       <TodoItems keys={item.keys} todoItem = {item}/>
//     )
//   })

//   return (
//     <div>
//       <Header />
//       <div className='todo-list'>
//         {todoComponents}
//       </div>
//       <Footer />
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLogIn: false,
      isLoading: true,
      todos: data.todosData,
      firstName: "",
      lastName: "",
      textarea: "some default text", 
      isChecked: false,
      gender: "",
      favColor: "blue"
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500)
  }

  handleOnChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox"? this.setState({[name]: checked}) : this.setState({[name]: value})
    // this.setState({
    //   [event.target.name]: event.target.value
    // })
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          return{
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  handleOnClick() {
    this.setState(prevState => {
      const updatedLogIn = !prevState.isLogIn
      console.log(updatedLogIn)
      return {isLogIn: updatedLogIn}
    })
  }

  render(){
    const todoComponents = this.state.todos.map((item) => {
      return (
        <TodoItems keys={item.id} todoItem = {item} onChange = {this.handleOnChange}/>
      )
    })

    return (
      <div>
        <Header />
        <div className='todo-list'>
          {/* <div>
            <h1>{this.state.isLogIn? "Logged In": "Logged out"}</h1>
            <button onClick={this.handleOnClick}>{this.state.isLogIn? "Log Out": "Log In"}</button>
            {
              this.state.isLoading?
              <h1>Loading....</h1> :
              <Conditional />
            }
          </div> */}
          {/* {todoComponents} */}
          <form>
            <input 
              type='text' 
              value={this.state.firstName} 
              name="firstName" 
              placeholder='First Name' 
              onChange={this.handleOnChange}
            />
            <br />
            <input 
              type='text' 
              value={this.state.lastName} 
              name="lastName" 
              placeholder='Last Name' 
              onChange={this.handleOnChange}
            />
            <br />
            <textarea 
              value={this.state.textarea} 
              onChange={this.handleOnChange}
            />
            <br />
            <input 
              type='checkbox' 
              checked={this.state.isChecked} 
              name="isChecked" 
              onChange={this.handleOnChange}
            />
            <br />
            <input 
              type='radio' 
              name="gender" 
              value = "male"
              checked={this.state.gender === "male"}               
              onChange={this.handleOnChange}
            /> Male
            <br />
            <input 
              type='radio' 
              name="gender" 
              value = "female"
              checked={this.state.gender === "female"} 
              onChange={this.handleOnChange}
            /> Female
            <br />
            <select 
              name = "favColor"
              value={this.state.favColor}
              onChange={this.handleOnChange}
            >
              <option value="blue">blue</option>
              <option value="red">red</option>
              <option value="yellow">yellow</option>
            </select>
            <h1>{this.state.firstName} {this.state.lastName}</h1>
            <h2>Your are a {this.state.gender}</h2>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}


export default App;
