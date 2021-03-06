import {addTaskAC, removeTaskAC, tasksReducer, TasksType, updateTaskAC} from "./tasks-reducer";

import {addToDoListAC, removeToDoListAC} from "./todolists-reducer";
import {TaskPriorities, TaskStatuses, TaskType} from "../api/tasksAPI";
import {ToDoListType} from "../api/todolistAPI";

let startState: TasksType = {}
beforeEach(() => {
    startState = {
        "todolistId1": [
            {
                id: "1",
                title: "CSS",
                todoListId: 'todolistId1',
                status: TaskStatuses.New,
                addedDate: '',
                deadline: '',
                description: '',
                order: 0,
                priority: TaskPriorities.Low,
                startDate: ''
            },
            {
                id: "2",
                title: "JS",
                todoListId: 'todolistId1',
                status: TaskStatuses.Completed,
                addedDate: '',
                deadline: '',
                description: '',
                order: 0,
                priority: TaskPriorities.Low,
                startDate: ''
            },
            {
                id: "3",
                title: "React",
                todoListId: 'todolistId1',
                status: TaskStatuses.New,
                addedDate: '',
                deadline: '',
                description: '',
                order: 0,
                priority: TaskPriorities.Low,
                startDate: ''
            }
        ],
        "todolistId2": [
            {
                id: "1",
                title: "bread",
                todoListId: 'todolistId2',
                status: TaskStatuses.New,
                addedDate: '',
                deadline: '',
                description: '',
                order: 0,
                priority: TaskPriorities.Low,
                startDate: ''
            },
            {
                id: "2",
                title: "milk",
                todoListId: 'todolistId2',
                status: TaskStatuses.Completed,
                addedDate: '',
                deadline: '',
                description: '',
                order: 0,
                priority: TaskPriorities.Low,
                startDate: ''
            },
            {
                id: "3",
                title: "tea",
                todoListId: 'todolistId2',
                status: TaskStatuses.New,
                addedDate: '',
                deadline: '',
                description: '',
                order: 0,
                priority: TaskPriorities.Low,
                startDate: ''
            }
        ]
    }
})

test('correct task should be deleted from correct array', () => {

    const endState = tasksReducer(startState, removeTaskAC("2", "todolistId2"))

    expect(endState['todolistId1'].length).toBe(3)
    expect(endState['todolistId2'].length).toBe(2)
    expect(endState['todolistId2'].every(t => t.id !== '2')).toBeTruthy()
});

test('correct task should be added to correct array', () => {

    const task: TaskType = {
        id: 'taskId',
        title: "juce",
        startDate: '',
        description: '',
        order: 2,
        status: TaskStatuses.New,
        addedDate: '',
        deadline: '',
        priority: TaskPriorities.Low,
        todoListId: "todolistId2"
    }
    const endState = tasksReducer(startState, addTaskAC(task))

    expect(endState["todolistId1"].length).toBe(3);
    expect(endState["todolistId2"].length).toBe(4);
    expect(endState["todolistId2"][0].id).toBeDefined();
    expect(endState["todolistId2"][0].title).toBe("juce");
    expect(endState["todolistId2"][0].status).toBe(TaskStatuses.New);
})

test('status of specified task should be changed', () => {

    const endState = tasksReducer(startState, updateTaskAC('2', {status: TaskStatuses.New}, "todolistId2"))

    expect(endState["todolistId2"][1].status).toBe(TaskStatuses.New);
    expect(endState["todolistId1"][1].status).toBe(TaskStatuses.Completed);

});

test('title of specified task should be changed', () => {


    const endState = tasksReducer(startState, updateTaskAC('2', {title: 'M&M'}, "todolistId2"))

    expect(endState["todolistId2"][1].title).toBe('M&M')
    expect(endState["todolistId1"][1].title).toBe('JS')
})


test('new array should be added when new todolist is added', () => {
    let newTodolistTitle: ToDoListType = {title: 'f', id: 'toDoListId', order: 2, addedDate: ''}
    const endState = tasksReducer(startState, addToDoListAC(newTodolistTitle))


    const keys = Object.keys(endState);
    const newKey = keys.find(k => k != "todolistId1" && k != "todolistId2");
    if (!newKey) {
        throw Error("new key should be added")
    }

    expect(keys.length).toBe(3);
    expect(endState[newKey]).toEqual([]);
});


test('property with todolistId should be deleted', () => {

    const endState = tasksReducer(startState, removeToDoListAC("todolistId2"))

    const keys = Object.keys(endState);

    expect(keys.length).toBe(1);
    expect(endState["todolistId2"]).not.toBeDefined();
});




