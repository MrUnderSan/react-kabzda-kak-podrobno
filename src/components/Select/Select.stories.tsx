import type {Meta} from '@storybook/react';
import {Select} from './Select';
import {any, func, string} from 'prop-types';
import {useState} from 'react';

const meta: Meta<typeof Select> = {
    title: 'Components/Select',
    component: Select,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        value: any,
        onChange: func,
        items: {
            title: string,
            value: any
        }
    }

} satisfies Meta<typeof Select>;

export default meta;

const items = [
    {title: "Minsk", value: 1},
    {title: "Kiev", value: 2},
    {title: "Moscow", value: 3},
]

export const ChangeableAccordion = () => {

    const [value, setValue] = useState<number | undefined>(undefined)

    const onChangeHandler = (v: number) => {
        setValue(v)
    }

    return <Select items={items} value={value} onChange={onChangeHandler} />
}