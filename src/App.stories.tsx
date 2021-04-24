import React from 'react';
import {Story} from "@storybook/react/types-6-0";
import App from "./App";
import {ReduxStoreDecorator} from "./ReduxStoreDecorator";

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

export default {
    title: 'TODOLIST/App',
    decorators: [ReduxStoreDecorator],
    component: App
}



const Template: Story = () => <App demo={true} />;

export const AppStories = Template.bind({});
