import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Components/Pages/Home/Home";
import CategoryNews from "../Components/Pages/CategoryNews/CategoryNews";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import AuthLayout from "../Components/Pages/AuthLayout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/category/:id',
                element: <CategoryNews />,
                loader: async () => {
                    const res = await fetch("/news.json");
                    const data = await res.json();
                    return data;
                }
            },
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children:[
            {
                path:'/auth/login',
                element:<Login />
            },
            {
                path:'/auth/register',
                element:<Register />
            }
        ]
    },
    // {
    //     path:'/news',
    //     element:
    // },
    {
        path: '/*',
        element: <h1>Error</h1>
    }
])

