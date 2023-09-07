import type {Meta, StoryObj} from '@storybook/react';

import {Rating} from './Rating';
import {number} from 'prop-types';

const meta: Meta<typeof Rating> = {
    title: 'Components/Rating',
    component: Rating,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        value: number,
        changeRating: ()=>{}
    }
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof Rating>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Rating0: Story = {
    name: 'Rating is 0',
    args: {
        value: 0,
        changeRating: ()=>{}
    },
};
export const Rating1: Story = {
    name: 'Rating is 1',
    args: {
        value: 1,
        changeRating: ()=>{}
    },
};
export const Rating2: Story = {
    name: 'Rating is 2',
    args: {
        value: 2,
        changeRating: ()=>{}
    },
};
export const Rating3: Story = {
    name: 'Rating is 3',
    args: {
        value: 3,
        changeRating: ()=>{}
    },
};
export const Rating4: Story = {
    name: 'Rating is 4',
    args: {
        value: 4,
        changeRating: ()=>{}
    },
};
export const Rating5: Story = {
    name: 'Rating is 5',
    args: {
        value: 5,
        changeRating: ()=>{}
    },
};