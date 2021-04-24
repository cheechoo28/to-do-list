import React, {ChangeEvent, useCallback} from "react";
import {Checkbox, IconButton} from "@material-ui/core";
import {EditableSpan} from "./components/EditableSpan/EditableSpan";
import {Delete} from "@material-ui/icons";
import {TaskStatuses, TaskType} from "./api/tasksAPI";

export type TaskPropsType = {
    toDoListId: string
    task: TaskType
    removeTask: (taskID: string, toDoListID: string) => void
    changeStatus: (taskID: string, status: TaskStatuses, toDoListID: string) => void
    changeTitle: (taskID: string, newTitle: string, toDoListId: string) => void
}
export const Task = React.memo ((props: TaskPropsType) => {

    const removeTask =() => props.removeTask(props.task.id, props.toDoListId)
    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeStatus(props.task.id, e.currentTarget.checked ? TaskStatuses.Completed : TaskStatuses.New, props.toDoListId)
    }
    const changeTaskTitle = useCallback( (changeTitle: string) => {
        props.changeTitle(props.task.id, changeTitle, props.toDoListId)
    },[props.changeTitle, props.toDoListId, props.task.id])

    return (
        <div style={{paddingLeft: "10px"}} className={props.task.status === TaskStatuses.Completed ? "is-done" : ""}>
            <Checkbox checked={props.task.status === TaskStatuses.Completed} onChange={onChangeStatus}/>
            <EditableSpan title={props.task.title} onChange={changeTaskTitle}/>
            <IconButton onClick={removeTask}>
                <Delete/>
            </IconButton>
        </div>)

})