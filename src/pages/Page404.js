import { useEffect } from 'react'

export default function Page404() {
    // Scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <h1>404 Page</h1>
        </main>
    )
}