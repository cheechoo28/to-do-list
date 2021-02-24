import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {IconButton, TextField} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";

type AddItemPropsType = {
    addItem: (changeTitle: string) => void
    title: string
}

export function AddItem(props: AddItemPropsType) {
    const [error, setError] = useState<boolean>(false)
    const [newTitleForTask, setNewTitleForTask] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitleForTask(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(false)
        if (e.charCode === 13) {
            addTask()
        }
    }
    const addTask = () => {
        if (newTitleForTask.trim() !== '') {
            props.addItem(newTitleForTask.trim())
            setNewTitleForTask('')
        } else {
            setError(true)
        }
    }

    return (
        <div>
            <TextField
                variant={"outlined"}
                label={[props.title]}
                value={newTitleForTask}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
                error={error}
                helperText={ error && "Title is required!"}
            />
            <IconButton onClick={addTask}>
                <AddBox color={"primary"}/>
            </IconButton>
        </div>
    )
}