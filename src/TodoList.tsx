import React, {useCallback} from "react";
import {AddItem} from "./AddItem";
import {EditableSpan} from "./EditableSpan";
import {Button, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {FilterType} from "./reducers/todolists-reducer";
import {Task} from "./Task";
import {TaskStatuses, TaskType} from "./api/tasksAPI";


type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    filter: FilterType
    removeTask: (taskID: string, toDoListID: string) => void
    changeFilter: (value: FilterType, toDoLIstID: string) => void
    addTask: (title: string, toDoListID: string) => void
    changeStatus: (taskID: string, status: TaskStatuses, toDoListID: string) => void
    changeTitle: (taskID: string, newTitle: string, toDoListId: string) => void
    removeToDoList: (toDoListID: string) => void
    changeTitleToDoList: (toDoListID: string, newTitle: string) => void
}

export const TodoList = React.memo((props: PropsType) => {
    console.log('ToDoList is called')
    const removeToDoList = () => props.removeToDoList(props.id)

    const addTask = useCallback((changeTitle: string) => {
        props.addTask(changeTitle, props.id)
    }, [props.addTask, props.id])

    const changeTitleToDoList = useCallback((newTitle: string) => {
        props.changeTitleToDoList(props.id, newTitle)
    }, [props.changeTitleToDoList, props.id])

    const changeFilterToAll = useCallback(() => {
        props.changeFilter("all", props.id)
    }, [props.changeFilter, props.id])
    const changeFilterToActive = useCallback(() => {
        props.changeFilter("active", props.id)
    }, [props.changeFilter, props.id])
    const changeFilterToCompleted = useCallback(() => {
        props.changeFilter("completed", props.id)
    }, [props.changeFilter, props.id])


    let tasksForTodoList = props.tasks
    if (props.filter === "active") {
        tasksForTodoList = tasksForTodoList.filter(t => t.status === TaskStatuses.New)
    }
    if (props.filter === "completed") {
        tasksForTodoList = tasksForTodoList.filter(t => t.status === TaskStatuses.Completed)
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
                    tasksForTodoList.map(task => <Task key={task.id}
                                                       toDoListId={props.id}
                                                       task={task}
                                                       removeTask={props.removeTask}
                                                       changeStatus={props.changeStatus}
                                                       changeTitle={props.changeTitle}
                        />
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
})


