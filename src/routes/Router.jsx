import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import BrandProducts from "../pages/BrandProducts/BrandProducts";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Cart from "../pages/Cart/Cart";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage/>,
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
            },
            {
                path: '/cart',
                element: <Cart/>
            }
        ]
    }
])
export default router;