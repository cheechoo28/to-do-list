import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type AddItemPropsType = {
    addItem: (changeTitle: string) => void
}

export function AddItem(props: AddItemPropsType) {
    const [error, setError] = useState<string | null>(null)
    const [newTitleForTask, setNewTitleForTask] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitleForTask(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.charCode === 13) {
            addTask()
        }
    }
    const addTask = () => {
        if (newTitleForTask.trim() !== '') {
            props.addItem(newTitleForTask.trim())
            setNewTitleForTask('')
        } else {
            setError("Title is required!")
        }
    }

    return (
        <div>
            <input
                className={error ? "error" : ""}
                value={newTitleForTask}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTask}>+</button>
            {error && <div className={"error-message"}>{error}</div>}
        </div>
    )
}