import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Components/Pages/Home/Home";
import CategoryNews from "../Components/Pages/CategoryNews/CategoryNews";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children:[
            {
                index:true,
                element:<Home />
            },
            {
                path:'/category/:id',
                element:<CategoryNews />
            },
        ]
    },
    // {
    //     path:'/auth',
    //     element:
    // },
    // {
    //     path:'/news',
    //     element:
    // },
    {
        path:'/*',
        element: <h1>Error</h1>
    }
])

