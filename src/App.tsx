import React, {useState} from 'react';
import './App.css';
import {TasksType, TodoList} from "./TodoList";
import {v1} from "uuid";


export type FilterType = "all" | "active" | "completed"

function App() {

    const [tasks, setTasks] = useState<Array<TasksType>>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Redux", isDone: false}
    ])

    const [filter, setFilter] = useState<FilterType>("all")

    function removeTask(taskID: string) {
        let newTasks = tasks.filter(t => t.id !== taskID)
        setTasks(newTasks)
    }
    function changeFilter(value: FilterType) {
            setFilter(value)
    }
    function addTask(title: string) {
        let task = {id: v1(), title: title, isDone: false}
        setTasks([task, ...tasks])
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
                      addTask={addTask}
            />
        </div>
    );
}

export default App;
