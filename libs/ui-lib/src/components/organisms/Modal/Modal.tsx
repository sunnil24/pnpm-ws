import { Dialog } from '@radix-ui/themes'
import { Cross2Icon } from '@radix-ui/react-icons'
import { ReactElement, ReactNode } from 'react'
import '@radix-ui/themes/styles.css'
import Heading from '../../atoms/Heading'

export interface ModalProps {
  modalOpen: boolean
  title?: string
  children?: ReactNode | string
  renderCTA?: () => ReactNode
  className?: string
}

const Modal: React.FC<ModalProps> = (props) => {
  const { modalOpen, title, children, renderCTA, className = '' } = props

  return (
    <>
      <Dialog.Root open={modalOpen}>
        <Dialog.Content className={`flex flex-col ${className}`} size={'3'}>
          {/* title section start */}
          <Dialog.Title id='modal_title'>
            <div className='flex justify-between items-start'>
              <Heading asTag='h2' className='text-lg w-11/12'>
                {title}
              </Heading>
              <Dialog.Close>
                <Cross2Icon className='cursor-pointer w-5 h-5' />
              </Dialog.Close>
            </div>
          </Dialog.Title>
          {/* title section end */}
          {/* main body start */}
          <Dialog.Description id='modal_description' className='mb-2'>
            {children}
          </Dialog.Description>
          {/* main body end */}
          {/* CTA section start */}
          <div className='flex justify-end'>{renderCTA && renderCTA()}</div>
          {/* CTA section end */}
        </Dialog.Content>
      </Dialog.Root>
    </>
  )
}

export default Modal
