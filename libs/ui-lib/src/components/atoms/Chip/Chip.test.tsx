import { render, screen, RenderResult } from '@testing-library/react'
import { beforeEach, describe, expect, test } from 'vitest'
import Chip from './index'

describe('Chip component', () => {
  let ChipComponent: RenderResult

  beforeEach(() => {
    ChipComponent = render(<Chip content='Testing Chip' />)
  })

  test('should render correctly', () => {
    expect(screen.getByText('Testing Chip')).toBeTruthy()
  })
})
