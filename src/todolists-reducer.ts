import {FilterType, ToDoListsType} from "./App";
import {v1} from "uuid";


type RemoveToDoListActionType = {
    type: 'REMOVE-TODOLIST'
    id: string
}

type AddToDoListActionType = {
    type: 'ADD-TODOLIST'
    title: string
}

type ChangeToDoListTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE'
    id: string
    title: string
}

type ChangeToDoListFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER'
    filter: FilterType
    id: string
}

export type ActionsType =
    RemoveToDoListActionType
    | AddToDoListActionType
    | ChangeToDoListTitleActionType
    | ChangeToDoListFilterActionType

export const toDoListsReducer = (state: Array<ToDoListsType>, action: ActionsType): Array<ToDoListsType> => {
    switch (action.type) {
        case "REMOVE-TODOLIST": {
            return state.filter(tl => tl.id !== action.id)
        }
        case "ADD-TODOLIST": {
            const toDoListID = v1()
            const newToDoList: ToDoListsType = {id: toDoListID, title: action.title, filter: "all"}
            return [
                ...state,
                newToDoList
            ]
        }
        case "CHANGE-TODOLIST-TITLE": {
            return state.map(tl => {
                if (tl.id === action.id) {
                    return {...tl, title: action.title}
                } else {
                    return tl
                }
            })
        }
        case "CHANGE-TODOLIST-FILTER": {
            return state.map(tl => {
                if (tl.id === action.id) {
                    return {...tl, filter: action.filter}
                } else {
                    return tl
                }
            })
        }

        default:
            return state
    }


}


export const removeToDoListAC = (id: string): RemoveToDoListActionType => {
    return {
        type: 'REMOVE-TODOLIST',
        id
    }
}

export const addToDoListAC = (title: string): AddToDoListActionType => {
    return {
        type: 'ADD-TODOLIST',
        title
    }
}

export const changeToDoListTitleAC = (id: string, title: string): ChangeToDoListTitleActionType => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        id,
        title
    }
}

export const changeToDoListFilterAC = (filter: FilterType, id: string): ChangeToDoListFilterActionType => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        id,
        filter
    }
}