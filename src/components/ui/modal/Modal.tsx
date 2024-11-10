import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import React from 'react';
import CrossIcon from '../../../assets/icons/crossIcon';

export enum ModalSize {
  VERYSMALL = 'w-1/8',
  SMALL = 'w-2/8',
  MEDIUM = 'w-1/2',
  LARGE = 'w-3/4',
  EXTRALARGE = 'w-11/12',
}

type ModalSizeType =
  | ModalSize.VERYSMALL
  | ModalSize.SMALL
  | ModalSize.MEDIUM
  | ModalSize.LARGE
  | ModalSize.EXTRALARGE;

interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  confirmText?: string;
  children?: React.ReactNode;
  modalSize?: ModalSizeType;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  onClose,
  children,
  modalSize = ModalSize.SMALL,
}) => {
  return (
    <Dialog open={isOpen} as="div" className="relative z-10" onClose={onClose}>
      <div
        className="fixed inset-0 bg-black bg-opacity-30"
        aria-hidden="true"
      />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel
          className={`w-full ${modalSize} rounded-lg bg-white shadow-lg p-6 backdrop-blur-2xl`}
        >
          <div className='w-full flex justify-between'>
            <DialogTitle
              as="h3"
              className="text-[#373052] text-[32px] font-bold"
            >
              {title}
            </DialogTitle>
            <CrossIcon onClose={onClose}/>
          </div>

          <div className="mt-2 text-sm text-gray-600">{children}</div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default Modal;
