import type {Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {Accordion} from './Accordion';
import {useState} from 'react';
import {array, bool, func, string} from 'prop-types';

const meta: Meta<typeof Accordion> = {
    title: 'Components/Accordion',
    component: Accordion,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        title: string,
        accordionCollapsed: bool,
        setAccordionCollapsed: func,
        items: array,
        onClick: func
    }

} satisfies Meta<typeof Accordion>;

export default meta;

const setAccordionCollapsedHandler = action('on change')

const onClickHandler = action('some item was clicked')

const items = [
    {title: 'Dimych', value: 1},
    {title: 'Valera', value: 2},
    {title: 'Artem', value: 3},
    {title: 'Viktor', value: 4}
]
export const ChangeableAccordion = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion
        title={'Changeable Accordion'}
        accordionCollapsed={collapsed}
        setAccordionCollapsed={() => {
            setCollapsed(!collapsed)
        }}
        items={items}
        onClick={onClickHandler}
    />
}

export const CollapsedAccordion = () => {
    return <Accordion
        title={'Collapsed Accordion'}
        accordionCollapsed={true}
        setAccordionCollapsed={setAccordionCollapsedHandler}
        items={[]}
        onClick={onClickHandler}
    />
}

export const OpenedAccordion = () => {
    return <Accordion
        title={'Opened Accordion'}
        accordionCollapsed={false}
        setAccordionCollapsed={() => {
        }}
        items={items}
        onClick={onClickHandler}
    />
}