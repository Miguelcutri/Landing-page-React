import React, { Component } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import BtnNavbar from './index'

export default {
    title: 'BtnNabar',
    component: BtnNavbar
} as Meta

const Template: Story = (args) => <BtnNavbar {...args} />

export const Button = Template.bind({})