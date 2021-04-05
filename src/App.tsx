import React, {useCallback} from 'react';
import './App.css';
import {AddItem} from "./AddItem";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./store";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, TasksType} from "./reducers/taskss-reducer";
import {
    addToDoListAC,
    changeToDoListFilterAC, changeToDoListTitleAC,
    FilterType,
    removeToDoListAC,
    ToDoListsType
} from "./reducers/todolists-reducer";
import {TodoList} from "./TodoList";

function App() {
    console.log('App is called')

    const dispatch = useDispatch()
    const tasks = useSelector<RootStateType, TasksType>(state => state.tasks)
    const toDoLists = useSelector<RootStateType, Array<ToDoListsType>>(state => state.toDoLists)

    const removeTask = useCallback( (taskID: string, toDoListId: string) => {
        dispatch(removeTaskAC(taskID, toDoListId))
    },[dispatch])

    const changeFilter = useCallback( (value: FilterType, toDoListId: string) => {
       dispatch(changeToDoListFilterAC(value, toDoListId))
    },[dispatch])

    const addTask = useCallback( (title: string, toDoListId: string) => {
        dispatch(addTaskAC(title, toDoListId))
    },[dispatch])

    const changeStatus = useCallback( (taskId: string, isDone: boolean, toDoListId: string) => {
        dispatch(changeTaskStatusAC(taskId, isDone, toDoListId))
    },[dispatch])

    const removeToDoList = useCallback( (toDoListId: string) => {
        dispatch(removeToDoListAC(toDoListId))
    },[dispatch])

    const addToDoList = useCallback( (titleForToDoList: string) => {
       dispatch(addToDoListAC(titleForToDoList))
    },[dispatch])

    const changeTaskTitle = useCallback( (taskId: string, newTitle: string, toDoListId: string) => {
        dispatch(changeTaskTitleAC(taskId, newTitle, toDoListId))
    },[dispatch])

    const changeTitleToDoList = useCallback((toDoListId: string, newTitle: string) => {
       dispatch(changeToDoListTitleAC(toDoListId, newTitle))
    },[dispatch])

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

                            const tasksForToDoList = tasks[tl.id]

                            return <Grid key={tl.id} item>
                                <Paper style={{padding: "20px"}} elevation={10}>
                                    <TodoList
                                        key={tl.id}
                                        id={tl.id}
                                        title={tl.title}
                                        tasks={tasksForToDoList}
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
