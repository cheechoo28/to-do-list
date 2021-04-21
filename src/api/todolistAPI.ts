import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '69175483-e93a-4825-bff5-a54b5bb568e7'
    }
})

export type ToDoListType = {
    id: string
    title: string
    addedDate: string
    order: number
}

type ResponseType<D> = {
    messages: Array<string>
    fieldsErrors: Array<string>
    resultCode: number
    data: D
}

export const toDoListAPI = {
    getTodos() {
        return instance.get<Array<ToDoListType>>(`todo-lists`)
    },
    addToDoList(title: string) {
        return instance.post<ResponseType<{item: ToDoListType}>>(`todo-lists`, {title})
    },
    removeToDoList(toDoListId: string) {
        return instance.delete<ResponseType<{}>>(`todo-lists/${toDoListId}`)
    },
    updateToDoList(toDoListId: string, title: string) {
        return instance.put<ResponseType<{}>>(`todo-lists/${toDoListId}`, {title})
    }
}