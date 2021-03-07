import React, { Component } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Parte1 from './index'

export default {
    title: 'Parte1',
    component: Parte1
} as Meta

const Template: Story = (args) => <Parte1 {...args} />

export const Primeira = Template.bind({})