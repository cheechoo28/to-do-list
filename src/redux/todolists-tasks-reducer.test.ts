import {addToDoListAC, ToDoListDomainType, toDoListsReducer} from "./todolists-reducer";
import {tasksReducer, TasksType} from "./tasks-reducer";
import {ToDoListType} from "../api/todolistAPI";


test('ids should be equals', () => {
    const startTasksState: TasksType = {};
    const startToDoListsState: Array<ToDoListDomainType> = [];

    let newTodolistTitle: ToDoListType = {title: 'f', id: 'toDoListId', order: 2, addedDate: ''}
    const action = addToDoListAC(newTodolistTitle);

    const endTasksState = tasksReducer(startTasksState, action)
    const endToDoListsState = toDoListsReducer(startToDoListsState, action)

    const keys = Object.keys(endTasksState);
    const idFromTasks = keys[0];
    const idFromToDoLists = endToDoListsState[0].id;

    expect(idFromTasks).toBe('toDoListId');
    expect(idFromToDoLists).toBe('toDoListId');
});

