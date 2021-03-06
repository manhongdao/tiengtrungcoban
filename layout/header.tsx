import { Menu, Transition, Dialog } from "@headlessui/react";
import {
    ChevronDownIcon,
    MicrophoneIcon,
    PencilAltIcon,
    BookmarkIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { Fragment, useState } from "react";
import { DialogDownload } from "../components/common/DiaglogDownload";
import { ROUTER_PATH } from "../constants";

export default function Header() {
    const [showDownload, setShowDownload] = useState(false);

    const home = (
        <Link href={"/"} passHref>
            <h2 className="px-6 py-2 flex items-center cursor-pointer rounded-md hover:text-white hover:bg-sky-400">
                Trang chủ
            </h2>
        </Link>
    );

    const learnPath = (
        <div>
            <Menu as="div" className="relative h-full">
                <Menu.Button className="inline-flex justify-center w-full h-full items-center px-6 py-2 text-sm font-semibold rounded-md hover:text-white hover:bg-sky-400 ">
                    Chương trình học
                    <ChevronDownIcon
                        className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                        aria-hidden="true"
                    />
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 w-48 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        href={ROUTER_PATH.LEARN_PRONOUNCE}
                                        passHref
                                    >
                                        <button
                                            className={`${
                                                active
                                                    ? "bg-sky-400 text-white"
                                                    : "text-gray-900"
                                            } group flex rounded-md items-center w-full px-2 py-2 hover:font-medium text-sm`}
                                        >
                                            {active ? (
                                                <MicrophoneIcon className="h-5 w-5 mr-2 text-white" />
                                            ) : (
                                                <MicrophoneIcon className="h-5 w-5 mr-2 text-sky-500" />
                                            )}
                                            Học phát âm
                                        </button>
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${
                                            active
                                                ? "bg-sky-400 text-white"
                                                : "text-gray-900"
                                        } group flex rounded-md items-center w-full px-2 py-2 hover:font-medium text-sm`}
                                    >
                                        {active ? (
                                            <PencilAltIcon className="h-5 w-5 mr-2 text-white" />
                                        ) : (
                                            <PencilAltIcon className="h-5 w-5 mr-2 text-sky-500" />
                                        )}
                                        Học viết
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${
                                            active
                                                ? "bg-sky-400 text-white"
                                                : "text-gray-900"
                                        } group flex rounded-md items-center w-full px-2 py-2 hover:font-medium text-sm`}
                                    >
                                        {active ? (
                                            <BookmarkIcon className="h-5 w-5 mr-2 text-white" />
                                        ) : (
                                            <BookmarkIcon className="h-5 w-5 mr-2 text-sky-500" />
                                        )}
                                        Học chủ đề
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );

    const download = (
        <a
            href="#"
            className="px-6 py-2 flex items-center rounded-md hover:text-white hover:bg-sky-400"
            onClick={() => {
                setShowDownload(true);
                console.log("show dialog");
            }}
        >
            Tải ứng dụng
        </a>
    );
    return (
        <>
            <nav className="z-10 top-0 w-full backdrop-blur flex transition-colors bg-white supports-backdrop-blur:bg-white/60 box-shadow_primary py-4 shadow">
                <div className="flex w-full justify-between mx-auto max-w-screen-xl">
                    <div className="cursor-pointer">
                        <Link href="/" passHref>
                            <h1 className="text-sky-500 font-bold text-center text-2xl pl-2">
                                Tiếng Trung cơ bản
                            </h1>
                        </Link>
                    </div>
                    {/* <div className="flex-1"></div> */}
                    <div className="flex text-gray-600 text-sm leading-6 font-semibold">
                        {home}
                        {learnPath}
                        {download}
                    </div>
                    <DialogDownload
                        show={showDownload}
                        setShow={setShowDownload}
                    />
                    <div className="flex items-center text-gray-700 text-md leading-6 font-semibold">
                        Đăng nhập
                    </div>
                </div>
            </nav>
        </>
    );
}
