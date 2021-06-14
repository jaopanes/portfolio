import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <>
            <Nav />
            <Header />

            <main>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-sm-12">{children}</div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
