import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";

export function DialogDownload({ show, setShow }: any) {
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => setShow(false)}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
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
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Payment successful
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Your payment has been successfully submitted. We’ve sent you
                  an email with all of the details of your order.
                </p>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={() => setShow(false)}
                >
                  Got it, thanks!
                </button>
              </div>
              <div style={{ minWidth: "335px" }}>
                <div className="text-center mb-4 font-semibold text-lg text-sky-700">
                  Tải App tại
                </div>
                <div className="flex">
                  <div className="flex">
                    <div className="text-white bg-slate-900 flex pl-2 pr-4 py-2 rounded-md cursor-pointer">
                      <div className="flex items-center">
                        <img
                          width={32}
                          height={32}
                          src="apple.png"
                          alt="Google Play"
                        />
                      </div>

                      <div className="pl-2">
                        <div
                          style={{ fontSize: "0.7rem" }}
                          className="text-gray-300"
                        >
                          Download on the
                        </div>
                        <div className="text-xl font-semibold">App Store</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="ml-4 text-white bg-slate-900 flex px-2 py-2 rounded-md cursor-pointer">
                      <div className="flex items-center">
                        <img
                          width={32}
                          height={32}
                          src="google-play.png"
                          alt="Google Play"
                        />
                      </div>

                      <div className="pl-2">
                        <div
                          style={{ fontSize: "0.65rem" }}
                          className="text-gray-300"
                        >
                          GET IT ON
                        </div>
                        <div className="text-xl p-0 font-semibold">
                          Google Play
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
