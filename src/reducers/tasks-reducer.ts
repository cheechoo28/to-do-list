import {AddToDoListActionType, RemoveToDoListActionType, SetToDoListsActionTypes} from "./todolists-reducer";
import {ModelType, TaskPriorities, tasksAPI, TaskStatuses, TaskType} from "../api/tasksAPI";
import {Dispatch} from "redux";
import {RootStateType} from "../store";

export type TasksType = {
    [key: string]: Array<TaskType>
}

type RemoveTaskActionType = {
    type: 'REMOVE-TASK'
    taskId: string
    toDoListId: string
}

export type DomainUpdateModelType = {
    title?: string
    description?: string
    status?: TaskStatuses
    priority?: TaskPriorities
    startDate?: string
    deadline?: string
}

export type ActionsType =
    RemoveTaskActionType
    | AddTaskActionType
    | AddToDoListActionType
    | RemoveToDoListActionType
    | SetToDoListsActionTypes
    | SetTasksActionType
    | UpdateTaskActionCreator


type initialStateType = TasksType

const initialState = {}

export const tasksReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "SET-TASKS": {
            return {
                ...state,
                [action.toDoListId]: [...action.tasks]
            }
        }
        case "REMOVE-TASK": {
            const copyState = {...state}
            const toDoListTasks = copyState[action.toDoListId]
            copyState[action.toDoListId] = toDoListTasks.filter(t => t.id !== action.taskId)
            return copyState
        }
        case "ADD-TASK": {
            const copyState = {...state}
            const tasksForToDoList = copyState[action.task.todoListId]
            const newTask: TaskType = action.task
            copyState[action.task.todoListId] = [newTask, ...tasksForToDoList]
            return copyState
        }
        case "UPDATE-TASK": {
            return {
                ...state,
                [action.toDoListId]: state[action.toDoListId].map(t => {
                    if (t.id === action.taskId) {
                        return {...t, ...action.model}
                    } else {
                        return t
                    }
                })
            }
        }

        case "ADD-TODOLIST": {
            return {...state, [action.toDoList.id]: []}
        }
        case "REMOVE-TODOLIST": {
            const copyState = {...state}
            delete copyState[action.id]
            return copyState
        }
        case "SET-TODO-LISTS": {
            const stateCopy = {...state}
            action.toDoLists.forEach(tl => {
                stateCopy[tl.id] = []
            })
            return stateCopy
        }
        default:
            return state
    }


}

const setTasksAC = (tasks: Array<TaskType>, toDoListId: string) => ({type: 'SET-TASKS', tasks, toDoListId} as const)

export const removeTaskAC = (taskId: string, toDoListId: string): RemoveTaskActionType => {
    return {
        type: 'REMOVE-TASK',
        taskId,
        toDoListId
    }
}

export const addTaskAC = (task: TaskType) => ({type: "ADD-TASK", task} as const)

export const updateTaskAC = (taskId: string, model: DomainUpdateModelType, toDoListId: string) => ({
    type: "UPDATE-TASK",
    toDoListId,
    taskId,
    model
} as const)

export const getTasksTC = (toDoListId: string) => (dispatch: Dispatch<ActionsType>) => {
    tasksAPI.getTasks(toDoListId).then(res => {
        dispatch(setTasksAC(res.data.items, toDoListId))
    })
}

export const removeTaskTC = (toDoListId: string, taskId: string) => (dispatch: Dispatch<ActionsType>) => {
    tasksAPI.removeTask(toDoListId, taskId).then(res => {
        dispatch(removeTaskAC(taskId, toDoListId))
    })
}

export const addTaskTC = (toDoListId: string, title: string) => (dispatch: Dispatch) => {
    tasksAPI.addTask(toDoListId, title).then(res => {
        dispatch(addTaskAC(res.data.data.item))
    })
}

export const updateTaskTC = (toDoListId: string, taskId: string, domainModel: DomainUpdateModelType) => (dispatch: Dispatch<ActionsType>, getState: () => RootStateType) => {
    const task = getState().tasks[toDoListId].find(t => t.id === taskId)
    if (task) {
        const apiModel: ModelType = {
            title: task.title,
            deadline: task.deadline,
            status: task.status,
            priority: task.priority,
            description: task.description,
            startDate: task.startDate,
            ...domainModel
        }
        tasksAPI.updateTask(toDoListId, taskId, apiModel).then(res => {
            dispatch(updateTaskAC(taskId, domainModel, toDoListId))
        })
    }

}

type SetTasksActionType = ReturnType<typeof setTasksAC>
type AddTaskActionType = ReturnType<typeof addTaskAC>
type UpdateTaskActionCreator = ReturnType<typeof updateTaskAC>

