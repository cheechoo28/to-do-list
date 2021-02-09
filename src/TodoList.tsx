import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterType} from "./App";

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
    removeToDoLIst: (toDoListID: string) => void
}

export function TodoList(props: PropsType) {

    const [newTitleForTask, setNewTitleForTask] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    const addTask = () => {
        if (newTitleForTask.trim() !== '') {
            props.addTask(newTitleForTask.trim(), props.id)
            setNewTitleForTask('')
        } else {
            setError("Title is required!")
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitleForTask(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.charCode === 13) {
            addTask()
        }
    }
    const removeToDoList = () => props.removeToDoLIst(props.id)

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
            <h3>{props.title}<button onClick={removeToDoList}>X</button></h3>
            <div>
                <input
                    className={error ? "error" : ""}
                    value={newTitleForTask}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressHandler}
                />
                <button onClick={addTask}>+</button>
            </div>
            {error && <div className={"error-message"}>{error}</div>}
            <ul>
                {
                    props.tasks.map(t => {

                            const removeTask = () => props.removeTask(t.id, props.id)
                            const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
                                props.changeStatus(t.id, e.currentTarget.checked, props.id)
                            }

                            return (
                                <li key={t.id} className={t.isDone ? "is-done" : ""}>
                                    <input type="checkbox" checked={t.isDone} onChange={onChangeStatus}/>
                                    <span>{t.title}</span>
                                    <button onClick={removeTask}>X</button>
                                </li>)
                        }
                    )
                }
            </ul>
            <div>
                <button onClick={changeFilterToAll} className={props.filter === "all" ? "active-filter" : ""}>All</button>
                <button onClick={changeFilterToActive} className={props.filter === "active" ? "active-filter" : ""}>Active</button>
                <button onClick={changeFilterToCompleted} className={props.filter === "completed" ? "active-filter" : ""}>Completed</button>
            </div>
        </div>
    )
}