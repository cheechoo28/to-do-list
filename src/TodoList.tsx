import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterType} from "./App";

export type TasksType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TasksType>
    removeTask: (taskID: string) => void
    changeFilter: (value: FilterType) => void
    addTask: (title: string) => void
}

export function TodoList(props: PropsType) {

    const [newTitleForTask, setNewTitleForTask] = useState<string>('')

    const addTask = () => {
        props.addTask(newTitleForTask)
        setNewTitleForTask('')
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitleForTask(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask()
        }
    }

    const changeFilterToAll = () => {
        props.changeFilter("all")
    }
    const changeFilterToActive = () => {
        props.changeFilter("active")
    }
    const changeFilterToCompleted = () => {
        props.changeFilter("completed")
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTitleForTask}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                />
                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {
                    props.tasks.map(t => {

                            const removeTask = () => props.removeTask(t.id)

                            return (
                                <li>
                                    <input type="checkbox" checked={t.isDone}/>
                                    <span>{t.title}</span>
                                    <button onClick={removeTask}>X</button>
                                </li>)
                        }
                    )
                }
            </ul>
            <div>
                <button onClick={changeFilterToAll}>All</button>
                <button onClick={changeFilterToActive}>Active</button>
                <button onClick={changeFilterToCompleted}>Completed</button>
            </div>
        </div>
    )
}