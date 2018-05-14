import Home from "../component/home/Home";
import Shop from "../component/shop/Shop";
import ShopDetail from "../component/shop/ShopDetail";
import About from "../component/about/About";

const route = [
    {
        path: "/home",
        component: Home,
        exact: true,
    },
    {
        path: "/shop",
        component: Shop,
        exact: true,
    },
    {
        path: "/shop/:id",
        component: ShopDetail,
        exact: true,
    },
    {
        path: "/about",
        component: About,
        exact: true,
    },
    {
        component: Home,
    },
];

export default route;