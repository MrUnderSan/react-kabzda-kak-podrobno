import type {Meta} from '@storybook/react';
import {UncontrolledAccordion} from './UncontrolledAccordion';
import {string} from 'prop-types';

const meta: Meta<typeof UncontrolledAccordion> = {
    title: 'Components/Uncontrolled/Accordion',
    component: UncontrolledAccordion,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        title: string
    },

} satisfies Meta<typeof UncontrolledAccordion>;

export default meta;

export const ChangeableAccordion = () => {
    return <UncontrolledAccordion title={'Changeable Accordion'} />
}