import React from "react"
export default function MainLayout({ children }) {
    return (
        <>
            <header>header</header>
            {children}
            <footer>Iam a footer</footer>
        </>
    );
}