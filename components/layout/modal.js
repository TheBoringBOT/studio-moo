import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function modal({ setModalOpen, props, children }) {
  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto rounded "
        onClose={() => null}
      >
        <div className="mx-auto min-h-screen text-center text-black rounded w-full h-full  max-h-[720px] max-w-[980px] md:px-4  md:h-[90vh] md:w-90">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-mid-grey/95 backdrop-blur-xl" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block    overflow-hidden text-left align-middle transition-all transform bg-white md:rounded-4xl border-text-primary md:max-h-[720px] md:max-w-[980px] w-full h-full mx-auto ">
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
