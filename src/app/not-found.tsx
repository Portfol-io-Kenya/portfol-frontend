import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Portfol.io - Page Not Found!',
    description: 'Portfol page not found',
}

const NotFound = () => {
    return (
        <div>Sorry, page not found! Go back Home</div>
    )
}

export default NotFound;