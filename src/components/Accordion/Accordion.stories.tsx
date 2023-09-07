import type {Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import { Accordion } from './Accordion';
import {useState} from 'react';
import {bool, string} from 'prop-types';

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
        setAccordionCollapsed: ()=>{}
    },
    args: {
        title: 'gfghhteht',
        accordionCollapsed: false
    }

} satisfies Meta<typeof Accordion>;

export default meta;

const setAccordionCollapsedHandler = action('on change')

export const CollapsedAccordion = () => {
    return <Accordion title={'Collapsed Accordion'} accordionCollapsed={true} setAccordionCollapsed={setAccordionCollapsedHandler} />
}

export const OpenedAccordion = () => {
    return <Accordion title={'Opened Accordion'} accordionCollapsed={false} setAccordionCollapsed={()=>{}} />
}

export const ChangeableAccordion = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion title={'Changeable Accordion'} accordionCollapsed={collapsed} setAccordionCollapsed={()=>{setCollapsed(!collapsed)}} />
}