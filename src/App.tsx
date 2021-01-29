import React, {useState} from 'react';
import './App.css';
import {TasksType, TodoList} from "./TodoList";


export type FilterType = "all" | "active" | "completed"

function App() {

    const [tasks, setTasks] = useState<Array<TasksType>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Redux", isDone: false}
    ])

    const [filter, setFilter] = useState<FilterType>("all")

    function removeTask(taskID: number) {
        let newTasks = tasks.filter(t => t.id !== taskID)
        setTasks(newTasks)
    }
    function changeFilter(value: FilterType) {
            setFilter(value)
    }

    let tasksForTodoList = tasks
    if (filter === "active") {
        tasksForTodoList = tasks.filter(t => t.isDone === false)
    }
    if (filter === "completed") {
        tasksForTodoList = tasks.filter(t => t.isDone === true)
    }

    return (
        <div className="App">
            <TodoList title="What to learn"
                      tasks={tasksForTodoList}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
