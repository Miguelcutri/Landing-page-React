import React, { Component } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Parte3 from './index'

export default {
    title: 'Parte3',
    component: Parte3
} as Meta

const Template: Story = (args) => <Parte3 {...args} />

export const Terceira = Template.bind({})