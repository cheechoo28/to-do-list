import {addToDoListAC, ToDoListDomainType, toDoListsReducer} from "./todolists-reducer";
import {tasksReducer, TasksType} from "./taskss-reducer";
import {ToDoListType} from "../api/todolistAPI";


test('ids should be equals', () => {
    const startTasksState: TasksType = {};
    const startToDoListsState: Array<ToDoListDomainType> = [];

    const action = addToDoListAC("new todolist");

    const endTasksState = tasksReducer(startTasksState, action)
    const endToDoListsState = toDoListsReducer(startToDoListsState, action)

    const keys = Object.keys(endTasksState);
    const idFromTasks = keys[0];
    const idFromToDoLists = endToDoListsState[0].id;

    expect(idFromTasks).toBe(action.toDoListId);
    expect(idFromToDoLists).toBe(action.toDoListId);
});

