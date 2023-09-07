import type {Meta, StoryObj} from '@storybook/react';

import { OnOff } from './OnOff';
import {bool, func} from 'prop-types';

const meta: Meta<typeof OnOff> = {
    title: 'Components/OnOff',
    component: OnOff,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        onOff: bool,
        setOnOff: func,
    },
}

export default meta;
type Story = StoryObj<typeof OnOff>;

export const Primary: Story = {
    name: 'On Mode',
    args: {
        onOff: true,
        setOnOff: x=>x
    },
};

export const Secondary: Story = {
    name: 'Off Mode',
    args: {
        onOff: false,
        setOnOff: x=>x
    },
};