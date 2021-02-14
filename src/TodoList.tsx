import React, {ChangeEvent} from "react";
import {FilterType} from "./App";
import {AddItem} from "./AddItem";
import {EditableSpan} from "./EditableSpan";

export type TasksType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TasksType>
    filter: FilterType
    removeTask: (taskID: string, toDoListID: string) => void
    changeFilter: (value: FilterType, toDoLIstID: string) => void
    addTask: (title: string, toDoListID: string) => void
    changeStatus: (taskID: string, isDone: boolean, toDoListID: string) => void
    changeTitle: (taskID: string, newTitle: string, toDoListId: string) => void
    removeToDoList: (toDoListID: string) => void
    changeTitleToDoList: (toDoListID: string, newTitle: string) => void
}

export function TodoList(props: PropsType) {


    const removeToDoList = () => props.removeToDoList(props.id)
    const addTask = (changeTitle: string) => {
        props.addTask(changeTitle, props.id)
    }
    const changeTitleToDoList = (newTitle: string) => {
        props.changeTitleToDoList(props.id, newTitle)
    }

    const changeFilterToAll = () => {
        props.changeFilter("all", props.id)
    }
    const changeFilterToActive = () => {
        props.changeFilter("active", props.id)
    }
    const changeFilterToCompleted = () => {
        props.changeFilter("completed", props.id)
    }

    return (
        <div>
            <h3><EditableSpan title={props.title} onChange={changeTitleToDoList}/>
                <button onClick={removeToDoList}>X</button>
            </h3>
            <AddItem addItem={addTask}/>
            <ul>
                {
                    props.tasks.map(t => {

                            const removeTask = () => props.removeTask(t.id, props.id)
                            const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
                                props.changeStatus(t.id, e.currentTarget.checked, props.id)
                            }
                            const changeTaskTitle = (changeTitle: string) => {
                                props.changeTitle(t.id, changeTitle, props.id)
                            }
                            return (
                                <li key={t.id} className={t.isDone ? "is-done" : ""}>
                                    <input type="checkbox" checked={t.isDone} onChange={onChangeStatus}/>
                                    <EditableSpan title={t.title} onChange={changeTaskTitle}/>
                                    <button onClick={removeTask}>X</button>
                                </li>)
                        }
                    )
                }
            </ul>
            <div>
                <button onClick={changeFilterToAll} className={props.filter === "all" ? "active-filter" : ""}>All
                </button>
                <button onClick={changeFilterToActive}
                        className={props.filter === "active" ? "active-filter" : ""}>Active
                </button>
                <button onClick={changeFilterToCompleted}
                        className={props.filter === "completed" ? "active-filter" : ""}>Completed
                </button>
            </div>
        </div>
    )
}

