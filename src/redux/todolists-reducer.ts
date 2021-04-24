import {toDoListAPI, ToDoListType} from "../api/todolistAPI";
import {Dispatch} from "redux";
import {
    RequestStatusType,
    setAppErrorAC,
    SetAppErrorActionType,
    setAppStatusAC,
    SetAppStatusActionType
} from "./app-reducer";
import {handleServerAppError, handleServerNetworkError} from "../utils/error-utils";

export type RemoveToDoListActionType = {
    type: 'REMOVE-TODOLIST'
    id: string
}

type ChangeToDoListFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER'
    filter: FilterType
    id: string
}

export type FilterType = "all" | "active" | "completed"


export type ToDoListDomainType = ToDoListType & {
    filter: FilterType
    entityStatus: RequestStatusType
}

export type ActionsType =
    RemoveToDoListActionType
    | AddToDoListActionType
    | ChangeToDoListTitleActionType
    | ChangeToDoListFilterActionType
    | SetToDoListsActionTypes
    | SetAppStatusActionType
    | SetAppErrorActionType
    | ChangeToDoListStatusActionType

type InitialStateType = Array<ToDoListDomainType>

const initialState: InitialStateType = []

export const toDoListsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-TODO-LISTS":
            return action.toDoLists.map(tl => ({...tl, filter: 'all', entityStatus: 'idle'}))

        case "REMOVE-TODOLIST": {
            return state.filter(tl => tl.id !== action.id)
        }
        case "ADD-TODOLIST": {
            return [...state, {...action.toDoList, filter: 'all', entityStatus: 'idle'}]
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
            return state.map(tl => tl.id === action.id ? {...tl, filter: action.filter} : tl)
        }
        case "CHANGE-TODOLIST-STATUS": {
            return state.map(tl => tl.id === action.id ? {...tl, entityStatus: action.status} : tl)
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
export const changeToDoListTitleAC = (id: string, title: string) => ({
    type: 'CHANGE-TODOLIST-TITLE',
    id,
    title
} as const)
export const changeToDoListStatusAC = (id: string, status: RequestStatusType) => ({
    type: 'CHANGE-TODOLIST-STATUS',
    id,
    status
} as const)
export const changeToDoListFilterAC = (filter: FilterType, id: string): ChangeToDoListFilterActionType => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        id,
        filter
    }
}

export const getToDoListsTC = () => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    toDoListAPI.getTodos().then(res => {
        dispatch(setToDoLists(res.data))
        dispatch(setAppStatusAC('succeeded'))
    })
}

export const removeToDoListTC = (toDoListId: string) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    dispatch(changeToDoListStatusAC(toDoListId, 'loading'))
    toDoListAPI.removeToDoList(toDoListId).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(removeToDoListAC(toDoListId))
            dispatch(setAppStatusAC('succeeded'))
        } else {
            handleServerAppError(res.data, dispatch)
        }
    })
        .catch(error => {
            handleServerNetworkError(error, dispatch)
        })
}

export const addToDoListTC = (title: string) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    toDoListAPI.addToDoList(title).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(addToDoListAC(res.data.data.item))
            dispatch(setAppStatusAC('succeeded'))
        } else {
            handleServerAppError(res.data, dispatch)
        }
    })
        .catch(error => {
            handleServerNetworkError(error, dispatch)
        })
}

export const updateToDoListTC = (toDoListId: string, title: string) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    toDoListAPI.updateToDoList(toDoListId, title).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(changeToDoListTitleAC(toDoListId, title))
            dispatch(setAppStatusAC('succeeded'))
        } else {
            handleServerAppError(res.data, dispatch)
        }
    })
        .catch(error => {
            handleServerNetworkError(error, dispatch)
        })
}

export type SetToDoListsActionTypes = ReturnType<typeof setToDoLists>
export type AddToDoListActionType = ReturnType<typeof addToDoListAC>
export type ChangeToDoListTitleActionType = ReturnType<typeof changeToDoListTitleAC>
export type ChangeToDoListStatusActionType = ReturnType<typeof changeToDoListStatusAC>