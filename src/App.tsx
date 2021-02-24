import React, {useState} from 'react';
import './App.css';
import {TasksType, TodoList} from "./TodoList";
import {v1} from "uuid";
import {AddItem} from "./AddItem";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";


export type FilterType = "all" | "active" | "completed"
export type ToDoListsType = {
    id: string
    title: string
    filter: FilterType
}
type TasksObjType = {
    [key: string]: Array<TasksType>
}

function App() {

    const toDoListID1 = v1()
    const toDoListID2 = v1()
    const [toDoLists, setToDoLists] = useState<Array<ToDoListsType>>([
        {id: toDoListID1, title: "What to learn", filter: 'all'},
        {id: toDoListID2, title: "What to buy", filter: 'all'},
    ])
    const [tasksObj, setTasks] = useState<TasksObjType>({
        [toDoListID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Redux", isDone: false}
        ],
        [toDoListID2]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "Meat", isDone: true},
            {id: v1(), title: "Bread", isDone: false},
            {id: v1(), title: "Book", isDone: false},
            {id: v1(), title: "Pork", isDone: false}
        ]
    })

    function removeTask(taskID: string, toDoListID: string) {
        const toDoListTasks = tasksObj[toDoListID]
        tasksObj[toDoListID] = toDoListTasks.filter(t => t.id !== taskID)
        setTasks({...tasksObj})
    }

    function changeFilter(value: FilterType, toDoListID: string) {
        const toDoList = toDoLists.find(tl => tl.id === toDoListID)
        if (toDoList) {
            toDoList.filter = value
            setToDoLists([...toDoLists])
        }
    }

    function addTask(title: string, toDoListID: string) {
        const task = {id: v1(), title: title, isDone: false}
        const toDoListTasks = tasksObj[toDoListID]
        tasksObj[toDoListID] = [task, ...toDoListTasks]
        setTasks({...tasksObj})
    }

    function changeStatus(taskID: string, isDone: boolean, toDoListID: string) {
        const toDoListTasks = tasksObj[toDoListID]
        const task = toDoListTasks.find(t => t.id === taskID)
        if (task) {
            task.isDone = isDone
            setTasks({...tasksObj})
        }
    }

    function removeToDoList(toDoListID: string) {
        const toDoList = toDoLists.filter(tl => tl.id !== toDoListID)
        if (toDoList) {
            setToDoLists([...toDoList])
            delete tasksObj[toDoListID]
        }
    }

    function addToDoList(titleForToDoList: string) {
        const toDoListID = v1()
        const newToDoList: ToDoListsType = {id: toDoListID, title: titleForToDoList, filter: "all"}
        setToDoLists([newToDoList, ...toDoLists])
        setTasks({
            ...tasksObj,
            [toDoListID]: []
        })
    }

    function changeTitle(taskID: string, newTitle: string, toDoListID: string) {
        const toDoListTask = tasksObj[toDoListID]
        const task = toDoListTask.find(t => t.id === taskID)
        if (task) {
            task.title = newTitle
            setTasks({...tasksObj})
        }

    }

    function changeTitleToDoList(toDoListID: string, newTitle: string) {
        const toDoList = toDoLists.find(tl => tl.id === toDoListID)
        if (toDoList) {
            toDoList.title = newTitle
            setToDoLists([...toDoLists])
        }
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
                            const allTasksForToDoList = tasksObj[tl.id]
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
                                        changeTitle={changeTitle}
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
