import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Services from "./src/components/Services";
import Error from "./src/components/Error";
import Footer from "./src/components/Footer";
import RestaurantMenu from "./src/components/RestaurantMenu";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import {Provider} from "react-redux";
import appStore from "./src/components/utils/appStore";
import Cart from "./src/components/Cart";


const About = lazy(()=> import("./src/components/About"));
const Contact = lazy(() => import("./src/components/Contact"));
const AppLayout = () => {
    return (
        <div className="app">
            <Provider store={appStore}>
                <Header />
                <Outlet/>
                <Footer/>
            </Provider>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
            },
            {
                path: '/contact',
                element: <Suspense fallback={<h1>Loading...</h1>}><Contact /></Suspense>
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/listRestaurantMenu/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/cart',
                element: <Cart />
            },
        ]
    },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);