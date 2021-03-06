import Header from "./header";
import Footer from "./footer";

interface PropType {
    children: JSX.Element;
}

export default function Layout({ children }: PropType) {
    return (
        <>
            <div className="flex flex-col">
                <Header />
                <main className="relative py-6 min-h-[90vh]">{children}</main>
                <Footer />
            </div>
        </>
    );
}
