import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Flag, Props } from '../src/index';
import { story } from './utils';

const meta: Meta = {
  component: Flag,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = args => <Flag {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = story(Template, { country: 'MA' });
