import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = 'https://etani.herokuapp.com';

const request = {
    get: url =>
        superagent.get(`${API_ROOT}${url}`)
            .then(res => { return res.body })
            .then((data) => { return data })
            .catch(err => err),

    post: (url, body) =>
        superagent.post(`${API_ROOT}${url}`, body)
            .set('Accept', 'application/json'),

    put: (url, body) =>
        superagent.put(`${API_ROOT}${url}`, body)
            .set('Accept', 'application/json')
}

const Login = {
    post: (slug, body) => request.post(`/api/user/${slug}`, body)
}

export default {
    Login,
}