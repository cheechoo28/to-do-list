import React, {useCallback, useEffect} from "react";
import {AddItem} from "./components/AddItemForm/AddItem";
import {EditableSpan} from "./components/EditableSpan/EditableSpan";
import {Button, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {FilterType, ToDoListDomainType} from "./redux/todolists-reducer";
import {Task} from "./Task";
import {TaskStatuses, TaskType} from "./api/tasksAPI";
import {useDispatch} from "react-redux";
import {getTasksTC} from "./redux/tasks-reducer";


type PropsType = {
    toDoList: ToDoListDomainType
    tasks: Array<TaskType>
    removeTask: (taskID: string, toDoListID: string) => void
    changeFilter: (value: FilterType, toDoLIstID: string) => void
    addTask: (title: string, toDoListID: string) => void
    changeStatus: (taskID: string, status: TaskStatuses, toDoListID: string) => void
    changeTitle: (taskID: string, newTitle: string, toDoListId: string) => void
    removeToDoList: (toDoListID: string) => void
    changeTitleToDoList: (toDoListID: string, newTitle: string) => void
    demo?: boolean
}

export const TodoList = React.memo(({demo = false, ...props}: PropsType) => {
    console.log('ToDoList is called')


    const dispatch = useDispatch()

    useEffect(() => {
        if (demo) {
            return
        }
        dispatch(getTasksTC(props.toDoList.id))
    }, [])
    const removeToDoList = () => props.removeToDoList(props.toDoList.id)

    const addTask = useCallback((changeTitle: string) => {
        props.addTask(changeTitle, props.toDoList.id)
    }, [props.addTask, props.toDoList.id])

    const changeTitleToDoList = useCallback((newTitle: string) => {
        props.changeTitleToDoList(props.toDoList.id, newTitle)
    }, [props.changeTitleToDoList, props.toDoList.id])

    const changeFilterToAll = useCallback(() => {
        props.changeFilter("all", props.toDoList.id)
    }, [props.changeFilter, props.toDoList.id])
    const changeFilterToActive = useCallback(() => {
        props.changeFilter("active", props.toDoList.id)
    }, [props.changeFilter, props.toDoList.id])
    const changeFilterToCompleted = useCallback(() => {
        props.changeFilter("completed", props.toDoList.id)
    }, [props.changeFilter, props.toDoList.id])


    let tasksForTodoList = props.tasks
    if (props.toDoList.filter === "active") {
        tasksForTodoList = tasksForTodoList.filter(t => t.status === TaskStatuses.New)
    }
    if (props.toDoList.filter === "completed") {
        tasksForTodoList = tasksForTodoList.filter(t => t.status === TaskStatuses.Completed)
    }

    return (
        <div>
            <h3><EditableSpan title={props.toDoList.title} onChange={changeTitleToDoList}/>
                <IconButton onClick={removeToDoList} disabled={props.toDoList.entityStatus === 'loading'}>
                    <Delete/>
                </IconButton>
            </h3>
            <AddItem addItem={addTask} title={"Task title..."} disabled={props.toDoList.entityStatus === 'loading'}/>
            <div>
                {
                    tasksForTodoList.map(task => <Task key={task.id}
                                                       toDoListId={props.toDoList.id}
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
                    color={props.toDoList.filter === "all" ? "secondary" : "primary"}
                    variant={"contained"}
                    onClick={changeFilterToAll}>All
                </Button>
                <Button
                    size={"small"}
                    color={props.toDoList.filter === "active" ? "secondary" : "primary"}
                    variant={"contained"}
                    onClick={changeFilterToActive}
                >Active
                </Button>
                <Button
                    size={"small"}
                    color={props.toDoList.filter === "completed" ? "secondary" : "primary"}
                    variant={"contained"}
                    onClick={changeFilterToCompleted}>Completed
                </Button>
            </div>
        </div>
    )
})


