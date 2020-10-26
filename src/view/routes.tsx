import Login from './Login';
import Register from './Register';
import Home from './Home';
import DetailProduct from './DetailProduct';
import Cart from './Cart';
import Sell from './Sell';
import Product from './Product';
import Profile from './Profile';

const AppRoutes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/product',
        component: Product
    },
    {
        path: '/detail-product',
        component: DetailProduct
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/sell',
        component: Sell 
    },
    {
        path: '/profile',
        component: Profile 
    },

]

export default AppRoutes