import React, { Component } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Parte2 from './index'

export default {
    title: 'Parte2',
    component: Parte2
} as Meta

const Template: Story = (args) => <Parte2 {...args} />

export const Segunda = Template.bind({})