import type {NextPage} from "next";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    MicrophoneIcon,
    PencilAltIcon,
    BookmarkIcon,
} from "@heroicons/react/solid";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {ReactChild} from "react";
import Link from "next/link";
import Head from "next/head";

const Home: NextPage = () => {
    const arrowPrev = (
        clickHandler: () => void,
        hasPrev: boolean,
        label: string
    ) => {
        return hasPrev ? (
            <button
                className="absolute z-10 top-[50%] rounded-[50%] translate-y-[-50%] left-0 bg-primary w-14 h-14 flex justify-center items-center"
                onClick={clickHandler}
            >
                <ChevronLeftIcon className="w-16 h-16 text-gray-900 hover:text-gray-700"/>
            </button>
        ) : (
            <button
                className="absolute z-10 top-[50%] rounded-[50%] translate-y-[-50%] left-0 bg-primary w-14 h-14 flex justify-center items-center"
                disabled
            >
                <ChevronLeftIcon className="w-16 h-16 text-gray-300"/>
            </button>
        );
    };

    const arrowNext = (
        clickHandler: () => void,
        hasPrev: boolean,
        label: string
    ) => {
        return hasPrev ? (
            <button
                className="absolute z-10 top-[50%] rounded-[50%] translate-y-[-50%] right-0 bg-primary w-14 h-14 flex justify-center items-center"
                onClick={clickHandler}
            >
                <ChevronRightIcon className="w-12 h-12 text-gray-900 hover:text-gray-700"/>
            </button>
        ) : (
            <button
                className="absolute z-10 top-[50%] rounded-[50%] translate-y-[-50%] right-0 bg-primary w-14 h-14 flex justify-center items-center"
                disabled
            >
                <ChevronRightIcon className="w-12 h-12 text-gray-300"/>
            </button>
        );
    };

    return (
        <>
            <Head>
                <title>Ti???ng Trung c?? b???n</title>
                <script async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6692210639109982"
                        crossOrigin="anonymous"></script>
            </Head>
            <div className="bg-primary">
                <div
                    className="max-w-[1200px] mx-auto flex items-center bg-white relative box-shadow_primary rounded-xl pl-6 pt-4 flex-col md:flex-row">
                    <div className="md:w-7/12 mb-6 md:mb-0">
                        <div className="text-4xl font-bold text-sky-500 hidden md:block">
                            Ti???ng Trung c?? b???n
                        </div>
                        <div className="text-lg text-gray-500 pt-6 mb-6">
                            H???c ph??t ??m, vi???t, t??? m???i v?? ng??? ph??p, ... ti???ng
                            Trung tr??n website
                        </div>
                        <Link href='/learn/pronounce/' passHref>
                            <button
                                className="flex md:block mx-auto md:m-0 bg-sky-500 hover:bg-sky-400 text-white h-12 py-2 px-16 rounded-full">
                                B???t ?????u h???c
                            </button>
                        </Link>
                    </div>
                    <div className="md:w-5/12 order-first md:order-1 flex justify-center">
                        <Carousel
                            className="w-80"
                            autoPlay={true}
                            infiniteLoop={true}
                            renderThumbs={(children: ReactChild[]) => {
                                children = [];
                                return children;
                            }}
                            renderArrowPrev={arrowPrev}
                            renderArrowNext={arrowNext}
                        >
                            <div>
                                <img
                                    style={{width: "200px"}}
                                    src="/menu-1.png"
                                />
                            </div>
                            <div>
                                <img
                                    style={{width: "200px"}}
                                    src="/menu-3.png"
                                />
                            </div>
                            <div>
                                <img
                                    style={{width: "200px"}}
                                    src="/menu-5.png"
                                />
                            </div>
                            <div>
                                <img
                                    style={{width: "200px"}}
                                    src="/menu-7.png"
                                />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-4 mt-8">
                <div className="item relative box-shadow_primary bg-white px-5 flex flex-col justify-center rounded-xl">
                    <div className="text-gray-500 font-semibold">Ch??? ?????</div>
                    <div className="pt-4 text-sky-500 text-3xl font-semibold">
                        20+
                    </div>
                </div>

                <div className="item relative box-shadow_primary bg-white px-5 flex flex-col justify-center rounded-xl">
                    <div className="text-gray-500 font-semibold">T??? m???i</div>
                    <div className="pt-4 text-sky-500 text-3xl font-semibold">
                        600+
                    </div>
                </div>

                <div className="item relative box-shadow_primary bg-white px-5 flex flex-col justify-center rounded-xl">
                    <div className="text-gray-500 font-semibold">Ng??? ph??p</div>
                    <div className="pt-4 text-sky-500 text-3xl font-semibold">
                        80+
                    </div>
                </div>

                <div className="item relative box-shadow_primary bg-white px-5 flex flex-col justify-center rounded-xl">
                    <div className="text-gray-500 font-semibold">H???i tho???i</div>
                    <div className="pt-4 text-sky-500 text-3xl font-semibold">
                        50+
                    </div>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 mt-8">
                <div className="flex justify-between relative box-shadow_primary bg-white py-4 px-6 rounded-xl">
                    <div>
                        <div className="text-sky-500 text-lg font-semibold">
                            H???c ph??t ??m
                        </div>
                        <div className="pt-3 text-gray-500 text-md">
                            Thanh m???u, v???n m???u,...
                        </div>
                        <Link href="/learn/pronounce/" passHref>
                            <button
                                className="bg-sky-500 hover:bg-sky-400 text-white text-sm py-2 px-8 mt-6 rounded-full">
                                B???t ?????u
                            </button>
                        </Link>
                    </div>
                    <div>
                        <MicrophoneIcon className="h-6 w-6 text-sky-500"/>
                    </div>
                </div>

                <div className="flex justify-between relative box-shadow_primary bg-white py-4 px-6 rounded-xl">
                    <div>
                        <div className="text-sky-500 text-lg font-semibold">
                            H???c vi???t
                        </div>
                        <div className="pt-3 text-gray-500 text-md">
                            C??c n??t c?? b???n, c??c b??? th???,...
                        </div>
                        <button className="bg-sky-500 hover:bg-sky-400 text-white text-sm py-2 px-8 mt-6 rounded-full">
                            B???t ?????u
                        </button>
                    </div>
                    <div>
                        <PencilAltIcon className="h-6 w-6 text-sky-500"/>
                    </div>
                </div>

                <div className="flex justify-between relative box-shadow_primary bg-white py-4 px-6 rounded-xl">
                    <div>
                        <div className="text-sky-500 text-lg font-semibold">
                            H???c ch??? ?????
                        </div>
                        <div className="pt-3 text-gray-500 text-md">
                            T??? m???i, h???i tho???i, ng??? ph??p,...
                        </div>
                        <button className="bg-sky-500 hover:bg-sky-400 text-white text-sm py-2 px-8 mt-6 rounded-full">
                            B???t ?????u
                        </button>
                    </div>
                    <div>
                        <BookmarkIcon className="h-6 w-6 text-sky-500"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
