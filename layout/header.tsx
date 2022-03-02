export default function Header() {
    return (
      <>
        <nav className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 bg-white supports-backdrop-blur:bg-white/60 box-shadow_primary py-4"
        >
            <div className="flex justify-between max-w-8xl mx-auto">
                <div className="flex items-center">
                    <img className="cursor-pointer" alt="logo" title="Tiếng trung cơ bản" src="/logo-text.png" width="210" />
                </div>
                <div className="flex text-gray-600 text-sm leading-6 font-semibold">
                    <a href="#" className="hover:text-sky-500 px-6">
                        Trang chủ
                    </a>
                    <a href="#" className="hover:text-sky-500 px-6">
                        Học viết
                    </a>
                    <a href="#" className="hover:text-sky-500 px-6">
                        Liên hệ chúng tôi
                    </a>
                </div>
                <div className="flex items-center text-gray-700 text-md leading-6 font-semibold">
                    Đăng nhập
                </div>
            </div>
        </nav>
      </>
    )
}