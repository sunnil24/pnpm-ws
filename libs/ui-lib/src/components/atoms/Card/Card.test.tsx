import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { Card } from './index'

describe('Card', () => {
  // @ts-ignore
  render(
    <Card>
      <div data-testid='card-child'>Child content</div>
    </Card>
  )

  test('should render Card component correctly', () => {
    expect(screen.getByTestId('card-child').textContent).toBe('Child content')
  })
})
