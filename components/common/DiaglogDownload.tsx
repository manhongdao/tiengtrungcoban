import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import { ANDROID_APP, IOS_APP } from "../../constants";

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
                Tải ứng dụng
              </Dialog.Title>
              <div className="mt-2 flex w-auto">
                <div className="flex-2 p-0">
                  <h3 className="text-gray-900 font-medium text-center">
                    QR Code
                  </h3>
                  <h4 className="italic">Quét mã QR để tải ứng dụng</h4>
                  <img
                    alt="QR Code"
                    className="w-48 h-48"
                    src="/qrcode_app.svg"
                  ></img>
                </div>
                <div className="flex flex-1 items-center justify-end">
                  <div
                    style={{ minWidth: "180px" }}
                    className="flex flex-col gap-2"
                  >
                    <div className="flex min-w-full">
                      <a
                        href={IOS_APP}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white min-w-full bg-slate-900 flex p-2 rounded-md cursor-pointer"
                      >
                        <div className="flex items-center">
                          <img
                            width={32}
                            height={32}
                            src="apple.png"
                            alt="App Store"
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
                      </a>
                    </div>
                    <div className="flex min-w-full">
                      <a
                        href={ANDROID_APP}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white min-w-full bg-slate-900 flex p-2 rounded-md cursor-pointer"
                      >
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
                      </a>
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
