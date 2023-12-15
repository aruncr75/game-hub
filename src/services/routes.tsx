import { createBrowserRouter } from "react-router-dom";
import { GameDetailPage } from "../pages/GameDetailPage";
import { HomePage } from "../pages/HomePage";
import { Layout } from "../pages/Layout";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([{
    errorElement:<ErrorPage></ErrorPage>,
    path:'/',element:<Layout></Layout>,children:[
        {index :true,element:<HomePage></HomePage>},
        {path:'game/:slug',element:<GameDetailPage></GameDetailPage>}
    ]
}])
export default router;

