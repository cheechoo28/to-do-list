import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {Task, TaskPropsType} from "./Task";
import {TaskPriorities, TaskStatuses} from "./api/tasksAPI";


export default {
    title: 'TODOLIST/Task',
    component: Task,
} as Meta;


const removeTask = action('Remove task')
const changeStatus = action('Change status')
const changeTaskTitle = action('Change title')


const Template: Story<TaskPropsType> = (args) => <Task {...args} />;

let baseArgs = {
    removeTask,
    changeStatus,
    changeTaskTitle,
}

export const TaskIsDoneStories = Template.bind({});
TaskIsDoneStories.args = {
    ...baseArgs,
    task: {id: '1', title: 'M&M', todoListId: 'todolistId', status: TaskStatuses.New, addedDate: '', deadline: '', description: '', order: 0, priority: TaskPriorities.Low, startDate: ''},
    toDoListId: 'todolistId'
};

export const TaskIsNotDoneStories = Template.bind({});
TaskIsNotDoneStories.args = {
    ...baseArgs,
    task: {id: '2', title: 'M&M', todoListId: 'todolistId', status: TaskStatuses.New, addedDate: '', deadline: '', description: '', order: 0, priority: TaskPriorities.Low, startDate: ''},
    toDoListId: 'todolistId'
};