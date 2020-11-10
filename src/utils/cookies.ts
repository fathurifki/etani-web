import Cookies from "js-cookie";

const tokenKey = `token`

export const getToken = () => Cookies.get(tokenKey) || ""
export const removeCokies = () => Cookies.remove(tokenKey)

export const setCredential = ({ token }: any) => {
    Cookies.set(tokenKey, token)
}
