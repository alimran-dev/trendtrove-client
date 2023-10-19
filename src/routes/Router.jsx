import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import BrandProducts from "../pages/BrandProducts/BrandProducts";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/addProduct',
                element: <AddProduct/>,
            },
            {
                path: '/products/:brand',
                element: <BrandProducts/>,
            },
            {
                path: '/details/:id',
                element: <ProductDetails/>,
            },
            {
                path: '/update/:id',
                element: <UpdateProduct/>,
            }
        ]
    }
])
export default router;