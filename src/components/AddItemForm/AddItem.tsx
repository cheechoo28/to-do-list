import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {IconButton, TextField} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";

export type AddItemPropsType = {
    addItem: (changeTitle: string) => void
    title: string
    disabled?: boolean
}

export const AddItem = React.memo(({addItem, disabled = false, ...props}: AddItemPropsType) => {
    console.log('AddItem is called')
    const [error, setError] = useState<boolean>(false)
    const [newTitleForTask, setNewTitleForTask] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitleForTask(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (error) {
            setError(false)
        }
        if (e.charCode === 13) {
            addTask()
        }
    }
    const addTask = () => {
        if (newTitleForTask.trim() !== '') {
            addItem(newTitleForTask.trim())
            setNewTitleForTask('')
        } else {
            setError(true)
        }
    }

    return (
        <div>
            <TextField
                disabled={disabled}
                variant={"outlined"}
                label={[props.title]}
                value={newTitleForTask}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
                error={error}
                helperText={ error && "Title is required!"}
            />
            <IconButton color={"primary"} onClick={addTask} disabled={disabled}>
                <AddBox />
            </IconButton>
        </div>
    )
})