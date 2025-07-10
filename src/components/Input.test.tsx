import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Input from './Input'
import { userEvent } from '@testing-library/user-event'

describe('Input', () => {
    it('renders input with label', () => {
        render(<Input label="Test Label" />)
        expect(screen.getByLabelText('Test Label')).toBeInTheDocument()
    })

    it('user type something, input should have focus', async () => {
        const user = userEvent.setup()
        render(<Input label="Test Label" />)
        await user.type(screen.getByLabelText('Test Label'), 'Hello')
        expect(screen.getByLabelText('Test Label')).toHaveFocus()
    })



})