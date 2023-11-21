import data from "./Data"
import TodoItems from "./TodoItem";

const MainContent = () => {    
    const todosComponents = data.todosData.map((item) => {
        console.log(item)
        return <TodoItems key={item.id} todoItem={item}/>
    })

    return (  
        <div>
            {todosComponents}
        </div>
    );
}
 
export default MainContent;