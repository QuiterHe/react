import Home from "../component/home/Home";
import Shop from "../component/shop/Shop";
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
        path: "/about",
        component: About,
        exact: true,
    },
    {
        component: Home,
    },
];

export default route;