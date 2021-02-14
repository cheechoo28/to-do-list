import React, {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    title: string
    onChange:(changeTitle: string) => void
}

export function EditableSpan(props: EditableSpanPropsType) {

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
        editMode ? <input value={changeTitle} onChange={onChangeTitleHandler} onBlur={offEditMode} autoFocus/> :
            <span onDoubleClick={activeEditMode}>{props.title}</span>
    )
}