import type { NextPage } from "next";
import {
  PencilAltIcon,
  BookmarkIcon,
  MicrophoneIcon,
} from "@heroicons/react/solid";

const Home: NextPage = () => {
  return (
    <>
      {/* <div className="max-w-8xl mx-auto mt-12 text-xl font-semibold">Trang chủ</div> */}
      <div className="bg-primary mt-6">
        <div className="max-w-8xl mx-auto menu-section flex items-center bg-white relative box-shadow_primary rounded-xl">
          <div className="w-4/12">
            <img alt="logo" className="w-3/12 mx-auto" src="/logo.png" />
          </div>
          <div className="w-1/12"></div>
          <div className="w-7/12">
            <div className="text-4xl font-bold text-sky-500">
              Tiếng Trung cơ bản
            </div>
            <div className="text-lg text-gray-500 pt-6">
              Học phát âm, viết, từ mới và ngữ pháp, ... tiếng Trung trên
              website
            </div>
            <button className="bg-sky-500 hover:bg-sky-400 text-white h-12 py-2 px-16 rounded-full">
              Đăng nhập
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto w-full flex mt-8">
        <div className="item w-3/12 relative box-shadow_primary bg-white py-4 px-6 rounded-xl">
          <div className="text-gray-500 font-semibold">Chủ đề</div>
          <div className="pt-4 text-sky-500 text-3xl font-semibold">20+</div>
        </div>

        <div className="item w-3/12 relative box-shadow_primary bg-white py-4 px-6 ml-8 rounded-xl">
          <div className="text-gray-500 font-semibold">Từ mới</div>
          <div className="pt-4 text-sky-500 text-3xl font-semibold">600+</div>
        </div>

        <div className="item w-3/12 relative box-shadow_primary bg-white py-4 px-6 ml-8 rounded-xl">
          <div className="text-gray-500 font-semibold">Ngữ pháp</div>
          <div className="pt-4 text-sky-500 text-3xl font-semibold">80+</div>
        </div>

        <div className="item w-3/12 relative box-shadow_primary bg-white py-4 px-6 ml-8 rounded-xl">
          <div className="text-gray-500 font-semibold">Hội thoại</div>
          <div className="pt-4 text-sky-500 text-3xl font-semibold">50+</div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto w-full flex mt-8">
        <div className="w-4/12 flex justify-between relative box-shadow_primary bg-white py-4 px-6 rounded-xl">
          <div>
            <div className="text-sky-500 text-lg font-semibold">
              Học phát âm
            </div>
            <div className="pt-3 text-gray-500 text-md">
              Thanh mẫu, vận mẫu,...
            </div>
            <button className="bg-sky-500 hover:bg-sky-400 text-white text-sm py-2 px-8 mt-6 rounded-full">
              Bắt đầu
            </button>
          </div>
          <div>
            <MicrophoneIcon className="h-6 w-6 text-sky-500" />
          </div>
        </div>

        <div className="w-4/12 flex justify-between relative box-shadow_primary bg-white py-4 px-6 ml-8 rounded-xl">
          <div>
            <div className="text-sky-500 text-lg font-semibold">Học viết</div>
            <div className="pt-3 text-gray-500 text-md">
              Các nét cơ bản, các bộ thủ,...
            </div>
            <button className="bg-sky-500 hover:bg-sky-400 text-white text-sm py-2 px-8 mt-6 rounded-full">
              Bắt đầu
            </button>
          </div>
          <div>
            <PencilAltIcon className="h-6 w-6 text-sky-500" />
          </div>
        </div>

        <div className="w-4/12 flex justify-between relative box-shadow_primary bg-white py-4 px-6 ml-8 rounded-xl">
          <div>
            <div className="text-sky-500 text-lg font-semibold">Học chủ đề</div>
            <div className="pt-3 text-gray-500 text-md">
              Từ mới, hội thoại, ngữ pháp,...
            </div>
            <button className="bg-sky-500 hover:bg-sky-400 text-white text-sm py-2 px-8 mt-6 rounded-full">
              Bắt đầu
            </button>
          </div>
          <div>
            <BookmarkIcon className="h-6 w-6 text-sky-500" />
          </div>
        </div>
      </div>

      <div className="appstore-section flex justify-around mt-8 w-full bg-sky-200 px-4 py-8 flex items-center">
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
                  <div style={{ fontSize: "0.7rem" }} className="text-gray-300">
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
                  <div className="text-xl p-0 font-semibold">Google Play</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full pl-4">
          <div className="h-full flex">
            <img src="/menu-1.png" className="h-full pr-8" />
            <img src="/menu-3.png" className="h-full pr-8" />
            <img src="/menu-5.png" className="h-full pr-8" />
            <img src="/menu-6.png" className="h-full pr-8" />
            <img src="/menu-7.png" className="h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
