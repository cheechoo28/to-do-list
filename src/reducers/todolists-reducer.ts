import {toDoListAPI, ToDoListType} from "../api/todolistAPI";
import {Dispatch} from "redux";

export type RemoveToDoListActionType = {
    type: 'REMOVE-TODOLIST'
    id: string
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

export type FilterType = "all" | "active" | "completed"


export type ToDoListDomainType = ToDoListType & {
    filter: FilterType
}

export type ActionsType =
    RemoveToDoListActionType
    | AddToDoListActionType
    | ChangeToDoListTitleActionType
    | ChangeToDoListFilterActionType
    | SetToDoListsActionTypes

type InitialStateType = Array<ToDoListDomainType>

const initialState: InitialStateType = []

export const toDoListsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-TODO-LISTS":
            return action.toDoLists.map(tl => ({...tl, filter: 'all'}))

        case "REMOVE-TODOLIST": {
            return state.filter(tl => tl.id !== action.id)
        }
        case "ADD-TODOLIST": {
            return [...state, {...action.toDoList, filter: 'all'}]
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

export const setToDoLists = (toDoLists: Array<ToDoListType>) => ({type: 'SET-TODO-LISTS', toDoLists} as const)
export const removeToDoListAC = (id: string): RemoveToDoListActionType => {
    return {
        type: 'REMOVE-TODOLIST',
        id
    }
}
export const addToDoListAC = (toDoList: ToDoListType) => ({type: 'ADD-TODOLIST', toDoList} as const)
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

export const getToDoListsTC = () => (dispatch: Dispatch<ActionsType>) => {
    toDoListAPI.getTodos().then(res => {
        dispatch(setToDoLists(res.data))
    })
}

export const removeToDoListTC = (toDoListId: string) => (dispatch: Dispatch<ActionsType>) => {
    toDoListAPI.removeToDoList(toDoListId).then(res => {
        dispatch(removeToDoListAC(toDoListId))
    })
}

export const addToDoListTC = (title: string) => (dispatch: Dispatch<ActionsType>) => {
    toDoListAPI.addToDoList(title).then(res => {
        dispatch(addToDoListAC(res.data.data.item))
    })
}

export const updateToDoListTC = (toDoListId: string, title: string) => (dispatch: Dispatch<ActionsType>) => {
    toDoListAPI.updateToDoList(toDoListId, title).then(res => {
        dispatch(changeToDoListTitleAC(toDoListId, title))
    })
}

export type SetToDoListsActionTypes = ReturnType<typeof setToDoLists>
export type AddToDoListActionType = ReturnType<typeof addToDoListAC>