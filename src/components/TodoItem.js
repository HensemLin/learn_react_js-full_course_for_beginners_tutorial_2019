import React from "react";

// const TodoItems = (props) => {
//     console.log(props)
//     return (  
//         <div className="todo-item">
//             <input type="checkbox" checked={props.todoItem.completed}></input>
//             <p>{props.todoItem.name}</p>
//         </div>
//     );
// }

class TodoItems extends React.Component {
    render() {
        const completedStyles = {
            fontStyle: 'italic', 
            textDecoration: 'line-through',
            color: "#cdcdcd"
        }
        return (  
            <div className="todo-item">
                <input type="checkbox" checked={this.props.todoItem.completed} onChange={() => this.props.handleChange(this.props.todoItem.id)}></input>
                <p style={this.props.todoItem.completed? completedStyles: {}}>{this.props.todoItem.name}</p>
            </div>
        );
    }
}

export default TodoItems;