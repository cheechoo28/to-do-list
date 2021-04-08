import {
    addToDoListAC,
    changeToDoListFilterAC,
    changeToDoListTitleAC, FilterType,
    removeToDoListAC,
    ToDoListDomainType,
    toDoListsReducer
} from './todolists-reducer';
import {v1} from 'uuid';

let todolistId1 = v1();
let todolistId2 = v1();
let startState: Array<ToDoListDomainType> = []

beforeEach(() => {
    startState = [
        {id: todolistId1, title: "What to learn", filter: "all", order: 0, addedDate: ''},
        {id: todolistId2, title: "What to buy", filter: "all", order: 0, addedDate: ''}
    ]
})

test('correct todolist should be removed', () => {

    const endState = toDoListsReducer(startState, removeToDoListAC(todolistId1))

    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(todolistId2);
});

test('correct todolist should be added', () => {
    let newTodolistTitle = "New Todolist";

    const endState = toDoListsReducer(startState, addToDoListAC(newTodolistTitle))

    expect(endState.length).toBe(3);
    expect(endState[2].title).toBe(newTodolistTitle);
});

test('correct todolist should change its name', () => {

    let newTodolistTitle = "New Todolist";

    const endState = toDoListsReducer(startState, changeToDoListTitleAC(todolistId2, newTodolistTitle));

    expect(endState[0].title).toBe("What to learn");
    expect(endState[1].title).toBe(newTodolistTitle);
});

test('correct filter of todolist should be changed', () => {

    let newFilter: FilterType = "completed";

    const endState = toDoListsReducer(startState, changeToDoListFilterAC(newFilter, todolistId2));

    expect(endState[0].filter).toBe("all");
    expect(endState[1].filter).toBe(newFilter);
});
