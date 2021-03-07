import React, { Component } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Folter from './index'

export default {
    title: 'Folter',
    component: Folter
} as Meta

const Template: Story = (args) => <Folter {...args} />

export const Folt = Template.bind({})