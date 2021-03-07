import React, { Component } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Btn from './index'

export default {
    title: 'Btn',
    component: Btn
} as Meta

const Template: Story = (args) => <Btn {...args} />

export const Button = Template.bind({})