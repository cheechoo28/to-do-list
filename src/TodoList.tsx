import React, {ChangeEvent} from "react";
import {AddItem} from "./AddItem";
import {EditableSpan} from "./EditableSpan";
import {Button, Checkbox, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {TaskType} from "./reducers/taskss-reducer";
import {FilterType} from "./reducers/todolists-reducer";



type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
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
                <IconButton onClick={removeToDoList}>
                    <Delete/>
                </IconButton>
            </h3>
            <AddItem addItem={addTask} title={"Task title..."}/>
            <div>
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
                                <div key={t.id} style={{paddingLeft: "10px"}} className={t.isDone ? "is-done" : ""}>
                                    <Checkbox checked={t.isDone} onChange={onChangeStatus}/>
                                    <EditableSpan title={t.title} onChange={changeTaskTitle}/>
                                    <IconButton onClick={removeTask}>
                                        <Delete/>
                                    </IconButton>
                                </div>)
                        }
                    )
                }
            </div>
            <div>
                <Button
                    size={"small"}
                    color={props.filter === "all" ? "secondary" : "primary"}
                    variant={"contained"}
                    onClick={changeFilterToAll}>All
                </Button>
                <Button
                    size={"small"}
                    color={props.filter === "active" ? "secondary" : "primary"}
                    variant={"contained"}
                    onClick={changeFilterToActive}
                >Active
                </Button>
                <Button
                    size={"small"}
                    color={props.filter === "completed" ? "secondary" : "primary"}
                    variant={"contained"}
                    onClick={changeFilterToCompleted}>Completed
                </Button>
            </div>
        </div>
    )
}

