import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Contact from "./src/components/Contact";
import Services from "./src/components/Services";
import Error from "./src/components/Error";
import Footer from "./src/components/Footer";
import RestaurantMenu from "./src/components/RestaurantMenu";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";


const About = lazy(()=> import("./src/components/About"))
const AppLayout = () => {
    return (
        <div className="app">
                <Header />
                <Outlet/>
                <Footer/>
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
                element: <Contact />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/listRestaurantMenu/:resId',
                element: <RestaurantMenu />
            }
        ]
    },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);