import {
  RenderResult,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import '@testing-library/jest-dom/vitest'
import Modal, { ModalProps } from './Modal'

const doneMock = vi.fn()

const modalProps: ModalProps = {
  modalOpen: false,
  title: 'Test modal title',
  children: <div></div>,
  ctaArray: [<button>Cancel</button>, <button onClick={doneMock}>Done</button>],
}

describe('Modal organism', () => {
  let res: RenderResult

  beforeEach(() => {
    res = render(<Modal {...modalProps} />)
  })

  it('should not render the modal', () => {
    expect(res.container.querySelector('#modal_title')).toBeFalsy()
  })

  it('should render the modal', () => {
    res.rerender(<Modal {...modalProps} />)

    waitFor(() => {
      expect(res.container.querySelector('#modal_title')).toHaveTextContent(
        modalProps.title as string
      )

      expect(res.container.querySelector('#modal_cta')).toHaveTextContent(
        'Done'
      )
      fireEvent.click(screen.getByText('Done'))
      expect(doneMock).toHaveBeenCalledOnce()
    })
  })
})
