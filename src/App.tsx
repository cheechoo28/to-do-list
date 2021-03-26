import React from 'react';
import './App.css';
import {AddItem} from "./AddItem";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./store";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, TasksType} from "./reducers/taskss-reducer";
import {
    addToDoListAC,
    changeToDoListFilterAC,
    FilterType,
    removeToDoListAC,
    ToDoListsType
} from "./reducers/todolists-reducer";
import {TodoList} from "./TodoList";





function App() {

    const dispatch = useDispatch()
    const tasks = useSelector<RootStateType, TasksType>(state => state.tasks)
    const toDoLists = useSelector<RootStateType, Array<ToDoListsType>>(state => state.toDoLists)

    function removeTask(taskID: string, toDoListId: string) {
        dispatch(removeTaskAC(taskID, toDoListId))
    }

    function changeFilter(value: FilterType, toDoListId: string) {
       dispatch(changeToDoListFilterAC(value, toDoListId))
    }

    function addTask(title: string, toDoListId: string) {
        dispatch(addTaskAC(title, toDoListId))
    }

    function changeStatus(taskId: string, isDone: boolean, toDoListId: string) {
        dispatch(changeTaskStatusAC(taskId, isDone, toDoListId))
    }

    function removeToDoList(toDoListId: string) {
        dispatch(removeToDoListAC(toDoListId))
    }

    function addToDoList(titleForToDoList: string) {
       dispatch(addToDoListAC(titleForToDoList))
    }

    function changeTaskTitle(taskId: string, newTitle: string, toDoListId: string) {
        changeTaskTitleAC(taskId, newTitle, toDoListId)
    }

    function changeTitleToDoList(toDoListId: string, newTitle: string) {
       dispatch(changeTitleToDoList(toDoListId, newTitle))
    }

    return (
        <div className="App">
            <AppBar position={"static"}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding: '20px 0'}}>
                    <AddItem addItem={addToDoList} title={"TodoList title..."}/>
                </Grid>
                <Grid container spacing={5}>
                    {
                        toDoLists.map(tl => {
                            const allTasksForToDoList = tasks[tl.id]
                            let tasksForTodoList = allTasksForToDoList
                            if (tl.filter === "active") {
                                tasksForTodoList = allTasksForToDoList.filter(t => t.isDone === false)
                            }
                            if (tl.filter === "completed") {
                                tasksForTodoList = allTasksForToDoList.filter(t => t.isDone === true)
                            }

                            return <Grid item>
                                <Paper style={{padding: "20px"}} elevation={10}>
                                    <TodoList
                                        key={tl.id}
                                        id={tl.id}
                                        title={tl.title}
                                        tasks={tasksForTodoList}
                                        removeTask={removeTask}
                                        changeFilter={changeFilter}
                                        addTask={addTask}
                                        changeStatus={changeStatus}
                                        filter={tl.filter}
                                        removeToDoList={removeToDoList}
                                        changeTitle={changeTaskTitle}
                                        changeTitleToDoList={changeTitleToDoList}
                                    />
                                </Paper>
                            </Grid>
                        })
                    }
                </Grid>
            </Container>
        </div>
    );
}

export default App;
