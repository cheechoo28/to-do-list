import React from "react";
import {FilterType} from "./App";

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TasksType>
    removeTask:(taskID: number) => void
    changeFilter:(value: FilterType) => void
}

export function TodoList(props: PropsType) {

    const changeFilterToAll = () => {props.changeFilter("all")}
    const changeFilterToActive = () => {props.changeFilter("active")}
    const changeFilterToCompleted = () => {props.changeFilter("completed")}

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
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