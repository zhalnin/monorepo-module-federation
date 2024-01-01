import { App } from "@/components/App";
import { Shop } from "@/pages/shop";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { UserCard} from '@packages/shared/src/components/UserCard';

const routes = [
    {
        path: '/shop',
        element: <App />,
        children: [
            // {
            //     path: '/about',
            //     element: <Suspense><LazyAbout /></Suspense>
            // },
            {
                path: '/shop/main',
                element: <Suspense><Shop /></Suspense>
            },
            {
                path: '/shop/second',
                element: <Suspense fallback={'Loading...'}><div style={{color: 'green'}}>
                    <h1>Second page</h1>
                    <UserCard   username={'FROM SHOP'} />
                    </div></Suspense>
            },
        ]
    },
];

export const router = createBrowserRouter(routes);

export default routes;