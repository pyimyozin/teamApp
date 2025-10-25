import { Outlet } from "react-router";

export default function MainLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

function Header() {
    return (
        <header>
            <h1>
                <div className="logo">
                </div>
                <p>App</p>
            </h1>
        </header>
    );
}

function Footer() {
    return (
        <footer>

        </footer>
    )
}
