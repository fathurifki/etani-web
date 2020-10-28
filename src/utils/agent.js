import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import { getToken } from './cookies';

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = 'https://etani.herokuapp.com/api';

const responseBody = res => res.body;

const token = getToken()
const tokenPlugin = req => {
    console.log('req', req)
    if (token) {
        req.set('Authorization', `${token}`);
    }
}

const request = {
    get: url =>
        superagent.get(`${API_ROOT}${url}`)
            .use(tokenPlugin)
            .then(responseBody),

    post: (url, body) =>
        superagent.post(`${API_ROOT}${url}`, body)
            .use(tokenPlugin)
            .set('Accept', 'application/json'),

    put: (url, body) =>
        superagent.put(`${API_ROOT}${url}`, body)
            .use(tokenPlugin)
            .set('Accept', 'application/json'),

    patch: (url, body) =>
        superagent.patch(`${API_ROOT}${url}`, body)
            .use(tokenPlugin)
            .set('Accept', 'application/json'),

    delete: (url, body) =>
        superagent.delete(`${API_ROOT}${url}`, body)
            .use(tokenPlugin)
            .set('Accept', 'application/json')
}

const Login = {
    post: (slug, body) => request.post(`/user/${slug}`, body)
}

const Product = {
    get: (slug) => request.get(`/${slug}`),
    getDetailProduct: (slug) => request.get(`/product/${slug}`)
}

const Category = {
    get: (slug) => request.get(`/product/category/${slug}`)
}

const Cart = {
    getCart: () => request.get('/transaction/carts'),
    postCart: (body) => request.post('/transaction/add_cart', body),
    patchPayment: (body) => request.patch('/transaction/cart/payments', body),
    deleteCart: (body) => request.delete('/transaction/carts', body),
}

const Payment = {
    get: () => request.get('/payments')
}

const Profile = {
    getProfile: () => request.get('/profile'),
    createProfile: (body) => request.post('/profile/create', body),
    updateProfle: (slug, body) => request.put(`/profile/?user_id=${slug}`, body)
}

const Sell = {
    post: (body) => request.post('/product', body)
}

const Buy = {
    post: (body) => request.post('/transcation/buy', body)
}

export default {
    Login,
    Product,
    Category,
    Cart,
    Payment,
    Profile,
    Sell,
    Buy
}