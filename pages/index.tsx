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
import SEOMetadata from '../components/SEOMetadata/SEOMetadata'
import {ROUTER_PATH} from "../constants";
import {HEAD} from "../constants/SEOConstant";

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
            <SEOMetadata title={HEAD.HOME.TITLE} metaTitle={HEAD.HOME.TITLE} metaDescription={HEAD.HOME.DESCRIPTION} metaKeywords={HEAD.HOME.KEYWORD}/>
            <div className="bg-primary">
                <div
                    className="max-w-[1200px] mx-auto flex items-center bg-white relative box-shadow_primary rounded-xl pl-6 pt-4 flex-col md:flex-row">
                    <div className="md:w-7/12 mb-6 md:mb-0">
                        <div className="text-4xl font-bold text-sky-500 hidden md:block">
                            Tiếng Trung cơ bản
                        </div>
                        <div className="text-lg text-gray-500 pt-6 mb-6">
                            Học phát âm, viết, từ mới và ngữ pháp, ... tiếng
                            Trung trên website
                        </div>
                        <Link href={ROUTER_PATH.LEARN_PRONOUNCE} passHref>
                            <button
                                className="flex md:block mx-auto md:m-0 bg-sky-500 hover:bg-sky-400 text-white h-12 py-2 px-16 rounded-full">
                                Bắt đầu học
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
                    <div className="text-gray-500 font-semibold">Chủ đề</div>
                    <div className="pt-4 text-sky-500 text-3xl font-semibold">
                        20+
                    </div>
                </div>

                <div className="item relative box-shadow_primary bg-white px-5 flex flex-col justify-center rounded-xl">
                    <div className="text-gray-500 font-semibold">Từ mới</div>
                    <div className="pt-4 text-sky-500 text-3xl font-semibold">
                        600+
                    </div>
                </div>

                <div className="item relative box-shadow_primary bg-white px-5 flex flex-col justify-center rounded-xl">
                    <div className="text-gray-500 font-semibold">Ngữ pháp</div>
                    <div className="pt-4 text-sky-500 text-3xl font-semibold">
                        80+
                    </div>
                </div>

                <div className="item relative box-shadow_primary bg-white px-5 flex flex-col justify-center rounded-xl">
                    <div className="text-gray-500 font-semibold">Hội thoại</div>
                    <div className="pt-4 text-sky-500 text-3xl font-semibold">
                        50+
                    </div>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 mt-8">
                <div className="flex justify-between relative box-shadow_primary bg-white py-4 px-6 rounded-xl">
                    <div>
                        <div className="text-sky-500 text-lg font-semibold">
                            Học phát âm
                        </div>
                        <div className="pt-3 text-gray-500 text-md">
                            Thanh mẫu, vận mẫu,...
                        </div>
                        <Link href={ROUTER_PATH.LEARN_PRONOUNCE} passHref>
                            <button
                                className="bg-sky-500 hover:bg-sky-400 text-white text-sm py-2 px-8 mt-6 rounded-full">
                                Bắt đầu
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
                            Học viết
                        </div>
                        <div className="pt-3 text-gray-500 text-md">
                            Các nét cơ bản, các bộ thủ,...
                        </div>
                        <button className="bg-sky-500 hover:bg-sky-400 text-white text-sm py-2 px-8 mt-6 rounded-full">
                            Bắt đầu
                        </button>
                    </div>
                    <div>
                        <PencilAltIcon className="h-6 w-6 text-sky-500"/>
                    </div>
                </div>

                <div className="flex justify-between relative box-shadow_primary bg-white py-4 px-6 rounded-xl">
                    <div>
                        <div className="text-sky-500 text-lg font-semibold">
                            Học chủ đề
                        </div>
                        <div className="pt-3 text-gray-500 text-md">
                            Từ mới, hội thoại, ngữ pháp,...
                        </div>
                        <button className="bg-sky-500 hover:bg-sky-400 text-white text-sm py-2 px-8 mt-6 rounded-full">
                            Bắt đầu
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
