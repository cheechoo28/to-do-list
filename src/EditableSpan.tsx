import React, {ChangeEvent, useState} from "react";
import {TextField} from "@material-ui/core";

export type EditableSpanPropsType = {
    title: string
    onChange: (changeTitle: string) => void
}

export const EditableSpan = React.memo((props: EditableSpanPropsType) => {

    console.log('EditableSpan is called')

    const [editMode, setEditMode] = useState<boolean>(false)
    const [changeTitle, setChangeTitle] = useState<string>('')

    const activeEditMode = () => {
        setEditMode(true)
        setChangeTitle(props.title)
    }
    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChangeTitle(e.currentTarget.value)
    }
    const offEditMode = () => {
        setEditMode(false)
        props.onChange(changeTitle)
    }

    return (
        editMode ? <TextField
                variant={"standard"}
                value={changeTitle}
                onChange={onChangeTitleHandler}
                onBlur={offEditMode}
                autoFocus
            /> :
            <span onDoubleClick={activeEditMode}>{props.title}</span>
    )
})