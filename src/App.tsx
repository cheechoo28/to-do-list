import React, {useCallback, useEffect} from 'react';
import './App.css';
import {AddItem} from "./components/AddItemForm/AddItem";
import {
    AppBar,
    Button,
    Container,
    Grid,
    IconButton,
    LinearProgress,
    Paper,
    Toolbar,
    Typography
} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./redux/store";
import {addTaskTC, removeTaskTC, TasksType, updateTaskTC} from "./redux/tasks-reducer";
import {
    addToDoListTC,
    changeToDoListFilterAC,
    FilterType,
    getToDoListsTC,
    removeToDoListTC,
    ToDoListDomainType,
    updateToDoListTC,
} from "./redux/todolists-reducer";
import {TodoList} from "./TodoList";
import {TaskStatuses} from "./api/tasksAPI";
import {RequestStatusType} from "./redux/app-reducer";
import {ErrorSnackbar} from "./components/ErrorSnackbar/ErrorSnackbar";

type AppPropsType = {
    demo?: boolean
}

function App({demo = false}: AppPropsType) {
    console.log('App is called')

    const dispatch = useDispatch()
    const tasks = useSelector<RootStateType, TasksType>(state => state.tasks)
    const toDoLists = useSelector<RootStateType, Array<ToDoListDomainType>>(state => state.toDoLists)
    const status = useSelector<RootStateType, RequestStatusType>(state => state.app.status)

    useEffect(() => {
        if (demo) {
            return
        }
        dispatch(getToDoListsTC())
    }, [])

    const removeTask = useCallback((taskID: string, toDoListId: string) => {
        dispatch(removeTaskTC(toDoListId, taskID))
    }, [dispatch])

    const changeFilter = useCallback((value: FilterType, toDoListId: string) => {
        dispatch(changeToDoListFilterAC(value, toDoListId))
    }, [dispatch])

    const addTask = useCallback((title: string, toDoListId: string) => {
        dispatch(addTaskTC(toDoListId, title))
    }, [dispatch])

    const changeStatus = useCallback((taskId: string, status: TaskStatuses, toDoListId: string) => {
        dispatch(updateTaskTC(toDoListId, taskId, {status}))
    }, [dispatch])

    const removeToDoList = useCallback((toDoListId: string) => {
        dispatch(removeToDoListTC(toDoListId))
    }, [dispatch])

    const addToDoList = useCallback((titleForToDoList: string) => {
        dispatch(addToDoListTC(titleForToDoList))
    }, [dispatch])

    const changeTaskTitle = useCallback((taskId: string, newTitle: string, toDoListId: string) => {
        dispatch(updateTaskTC(toDoListId, taskId, {title: newTitle}))
    }, [dispatch])

    const changeTitleToDoList = useCallback((toDoListId: string, newTitle: string) => {
        dispatch(updateToDoListTC(toDoListId, newTitle))
    }, [dispatch])

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
            {status === 'loading' && <LinearProgress/>}
            <ErrorSnackbar/>
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
                                        toDoList={tl}
                                        key={tl.id}
                                        demo={demo}
                                        tasks={tasksForToDoList}
                                        removeTask={removeTask}
                                        changeFilter={changeFilter}
                                        addTask={addTask}
                                        changeStatus={changeStatus}
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
