import Login from './Login';
import Home from './Home';
import Product from './Product';
import Cart from './Cart';
import Profile from './Profile';
import Sell from './Sell';
import DetailProduct from './DetailProduct';
import PaymentStatus from './PaymentStatus';
import Register from './Register';

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
    {
        path: '/payment-status',
        component: PaymentStatus
    },

]

export default AppRoutes