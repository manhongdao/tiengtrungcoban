import Header from "./header";
import Footer from "./footer";
import {Sidebar} from "./sidebar";

interface PropType {
    children: JSX.Element;
}

export default function Layout({ children }: PropType) {
    return (
        <>
            {/*<div className="flex flex-col">*/}
            <div className="relative">
                <Header />
                <main className="relative py-6 px-4 min-h-[90vh]">{children}</main>
                {/* <Sidebar className="z-10 absolute top-0 right-0" open/> */}
                <Footer />
            </div>
        </>
    );
}
