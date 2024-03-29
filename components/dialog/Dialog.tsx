import { Dialog as HeadlessDialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  children: React.ReactNode | React.ReactNode[];
};

const Dialog = ({
  isOpen,
  onClose,
  size = 'md',
  className,
  children,
}: Props) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <HeadlessDialog
        as="div"
        className={clsx('relative z-10', className)}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <HeadlessDialog.Panel
                className={clsx(
                  size === 'sm' && 'max-w-md',
                  size === 'md' && 'max-w-xl',
                  size === 'lg' && 'max-w-2xl',
                  size === 'xl' && 'max-w-4xl',
                  'w-full  overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl',
                  'transition-all'
                )}
              >
                {children}
              </HeadlessDialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </HeadlessDialog>
    </Transition>
  );
};

export default Dialog;
