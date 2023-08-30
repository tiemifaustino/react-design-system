import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from "./Button";

// configurações globais para todas as variações
export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Lorem ipsum',
    size: 'md',
  },
  argTypes: {}
} as Meta<ButtonProps>

// precisa exportar uma variável
export const Default: StoryObj<ButtonProps> = {}
