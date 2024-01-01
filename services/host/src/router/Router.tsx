import { App } from "@/components/App";
import { createBrowserRouter } from "react-router-dom";
// @ts-ignore
import shopRoutes from 'shop/Router';
// @ts-ignore
import adminRoutes from 'admin/Router';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            // {
            //     path: '/about',
            //     element: <Suspense><LazyAbout /></Suspense>
            // },
            // {
            //     path: '/shop',
            //     element: <Suspense><Shop /></Suspense>
            // },
            ...shopRoutes,
            ...adminRoutes,
        ]
    },
]);