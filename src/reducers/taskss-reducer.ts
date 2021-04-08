import {v1} from "uuid";
import {AddToDoListActionType, RemoveToDoListActionType} from "./todolists-reducer";
import {TaskPriorities, TaskStatuses, TaskType} from "../api/tasksAPI";


export type TasksType = {
    [key: string]: Array<TaskType>
}

type RemoveTaskActionType = {
    type: 'REMOVE-TASK'
    taskId: string
    toDoListId: string
}

type AddTaskActionType = {
    type: 'ADD-TASK'
    title: string
    toDoListId: string
}

type ChangeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS'
    taskId: string
    toDoListId: string
    status: TaskStatuses
}

type ChangeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE'
    taskId: string
    toDoListId: string
    title: string
}


export type ActionsType =
    RemoveTaskActionType
    | AddTaskActionType
    | ChangeTaskStatusActionType
    | ChangeTaskTitleActionType
    | AddToDoListActionType
    | RemoveToDoListActionType


type initialStateType = TasksType

const initialState = {}

export const tasksReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "REMOVE-TASK": {
            const copyState = {...state}
            const toDoListTasks = copyState[action.toDoListId]
            copyState[action.toDoListId] = toDoListTasks.filter(t => t.id !== action.taskId)
            return copyState
        }
        case "ADD-TASK": {
            const copyState = {...state}
            const toDoListTasks = copyState[action.toDoListId]
            const newTask: TaskType = {id: v1(), title: action.title, todoListId: action.toDoListId, status: TaskStatuses.New, addedDate: '', deadline: '', description: '', order: 0, priority: TaskPriorities.Low, startDate: ''}
            copyState[action.toDoListId] = [newTask, ...toDoListTasks]
            return copyState
        }
        case "CHANGE-TASK-STATUS": {
            return {
                ...state,
                [action.toDoListId]: state[action.toDoListId].map(t => {
                    if (t.id === action.taskId) {
                        return {...t, status: action.status}
                    } else {
                        return t
                    }
                })
            }
        }
        case "CHANGE-TASK-TITLE": {
            return {
                ...state,
                [action.toDoListId]: state[action.toDoListId].map(t => {
                    if (t.id === action.taskId) {
                        return {...t, title: action.title}
                    } else {
                        return t
                    }
                })
            }
        }
        case "ADD-TODOLIST": {
            return {
                ...state,
                [action.toDoListId]: []
            }
        }
        case "REMOVE-TODOLIST": {
            const copyState = {...state}
            delete copyState[action.id]
            return copyState
        }
        default:
            return state
    }


}


export const removeTaskAC = (taskId: string, toDoListId: string): RemoveTaskActionType => {
    return {
        type: 'REMOVE-TASK',
        taskId,
        toDoListId
    }
}

export const addTaskAC = (title: string, toDoListId: string): AddTaskActionType => {
    return {
        type: "ADD-TASK",
        title,
        toDoListId
    }
}

export const changeTaskStatusAC = (taskId: string, status: TaskStatuses, toDoListId: string): ChangeTaskStatusActionType => {
    return {
        type: "CHANGE-TASK-STATUS",
        toDoListId,
        taskId,
        status
    }
}

export const changeTaskTitleAC = (taskId: string, title: string, toDoListId: string): ChangeTaskTitleActionType => {
    return {
        type: "CHANGE-TASK-TITLE",
        toDoListId,
        taskId,
        title
    }
}
