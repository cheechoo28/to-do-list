import React from 'react';

import {Story} from "@storybook/react/types-6-0";
import {AddItem, AddItemPropsType} from "./AddItem";
import {action} from "@storybook/addon-actions";

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

export default {
    title: 'TODOLIST/AddItem',
    component: AddItem
}

const Template: Story<AddItemPropsType> = (args) => <AddItem {...args} />;

export const AddItemFormStories = Template.bind({});
AddItemFormStories.args = {
    addItem: action('Clicked add item'),
    title: "Title...",
    disabled: false
};

export const AddItemFormDisabledExample = Template.bind({});
AddItemFormDisabledExample.args = {
    addItem: action('Clicked add item'),
    title: "Title...",
    disabled: true
};