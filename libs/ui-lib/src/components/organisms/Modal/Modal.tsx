import { Dialog } from '@radix-ui/themes'
import { Cross2Icon } from '@radix-ui/react-icons'
import { ReactElement, ReactNode } from 'react'
import { ButtonProps } from '../../atoms/Button/Button'
import '@radix-ui/themes/styles.css'

export interface ModalProps {
  modalOpen: boolean
  title?: string
  children?: ReactNode | string
  ctaArray?: Array<ReactElement<ButtonProps>>
}

const Modal: React.FC<ModalProps> = (props) => {
  const { modalOpen, title, children, ctaArray } = props

  return (
    <>
      <Dialog.Root open={modalOpen}>
        {/* title section start */}
        <Dialog.Content className='flex flex-col' size={'3'}>
          <Dialog.Title id='modal_title'>
            <div className='flex justify-between items-start'>
              <span className='w-11/12'>{title || ''}</span>
              <Dialog.Close>
                <Cross2Icon className='cursor-pointer w-5 h-5' />
              </Dialog.Close>
            </div>
          </Dialog.Title>
          {/* title section end */}
          {/* main body start */}
          <Dialog.Description id='modal_description'>
            {children || ''}
          </Dialog.Description>
          {/* main body end */}
          {/* CTA section start */}
          {ctaArray?.length && (
            <div className='flex items-center justify-end modal_cta'>
              {ctaArray.map((cta) => cta)}
            </div>
          )}
          {/* CTA section end */}
        </Dialog.Content>
      </Dialog.Root>
    </>
  )
}

export default Modal
