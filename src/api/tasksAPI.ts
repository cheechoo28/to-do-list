import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '69175483-e93a-4825-bff5-a54b5bb568e7'
    }
})

export enum TaskStatuses {
    New = 0,
    InProgress = 1,
    Completed = 2,
    Draft= 3
}

export  enum TaskPriorities {
    Low = 0,
    Middle = 1,
    Hi = 2,
    Urgently = 3,
    Later = 4
}

export type TaskType = {
    id: string
    title: string
    description: string
    todoListId: string
    order: number
    status: TaskStatuses
    priority: TaskPriorities
    startDate: string
    deadline: string
    addedDate: string
}

type GetTasksResponseType = {
    items: Array<TaskType>
    totalCount: number
    error: null | string
}

type CommonResponseType<D> = {
    data: D
    messages: Array<string>
    fieldsErrors: Array<string>
    resultCode: number
}

export type ModelType = {
    title: string
    description: string
    status: TaskStatuses
    priority: TaskPriorities
    startDate: string
    deadline: string
}

export const tasksAPI = {
    getTasks(toDoListId: string) {
        return instance.get<GetTasksResponseType>(`todo-lists/${toDoListId}/tasks`)
    },
    addTask(toDoListId: string, title: string) {
        return instance.post<CommonResponseType<{item: TaskType}>>(`todo-lists/${toDoListId}/tasks`, {title})
    },
    removeTask(toDoListId: string, taskId: string) {
        return instance.delete<CommonResponseType<{}>>(`todo-lists/${toDoListId}/tasks/${taskId}`)
    },
    updateTask(toDoListId: string, taskId: string, model: ModelType) {
        return instance.put<CommonResponseType<{item: TaskType}>>(`todo-lists/${toDoListId}/tasks/${taskId}`, model)
    }
}