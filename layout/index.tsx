import Header from './header';
import Footer from './footer';

interface PropType {
    children: JSX.Element
}

export default function Layout({ children }: PropType) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}