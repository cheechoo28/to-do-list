import {TaskType} from "./reducers/taskss-reducer";
import React, {ChangeEvent, useCallback} from "react";
import {Checkbox, IconButton} from "@material-ui/core";
import {EditableSpan} from "./EditableSpan";
import {Delete} from "@material-ui/icons";

export type TaskPropsType = {
    toDoListId: string
    task: TaskType
    removeTask: (taskID: string, toDoListID: string) => void
    changeStatus: (taskID: string, isDone: boolean, toDoListID: string) => void
    changeTitle: (taskID: string, newTitle: string, toDoListId: string) => void
}
export const Task = React.memo ((props: TaskPropsType) => {

    const removeTask =() => props.removeTask(props.task.id, props.toDoListId)
    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeStatus(props.task.id, e.currentTarget.checked, props.toDoListId)
    }
    const changeTaskTitle = useCallback( (changeTitle: string) => {
        props.changeTitle(props.task.id, changeTitle, props.toDoListId)
    },[props.changeTitle, props.toDoListId, props.task.id])

    return (
        <div style={{paddingLeft: "10px"}} className={props.task.isDone ? "is-done" : ""}>
            <Checkbox checked={props.task.isDone} onChange={onChangeStatus}/>
            <EditableSpan title={props.task.title} onChange={changeTaskTitle}/>
            <IconButton onClick={removeTask}>
                <Delete/>
            </IconButton>
        </div>)

})