import React, { Component } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Testimonials from './index'

export default {
    title: 'Testimonials',
    component: Testimonials
} as Meta

const Template: Story = (args) => <Testimonials {...args} />

export const Testimon = Template.bind({})