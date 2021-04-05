import React from 'react';

import {Story} from "@storybook/react/types-6-0";
import {action} from "@storybook/addon-actions";
import {EditableSpan, EditableSpanPropsType} from "./EditableSpan";

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

export default {
    title: 'TODOLIST/EditableSpan',
    component: EditableSpan
}

const onChange = action('Task title changed')

const Template: Story<EditableSpanPropsType> = (args) => <EditableSpan {...args} />;

export const EditableSpanStories = Template.bind({});
EditableSpanStories.args = {
    onChange,
    title: "CSS"
};