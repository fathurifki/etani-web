import * as React from 'react';
import { Router, Route, Redirect } from "react-router-dom"
import { getToken } from '../../utils/cookies';

import history from '../../utils/browserHistory';
import Header from '../header';
import Footer from '../footer';
import { isMobile } from 'src/utils/mobileView';

const CustomRoute = ({ component: Component, ...rest }: any) => {
    const bottomMenu = ["/home", "/profile", "/product"]
    const headerMenu = [
        "/product",
        "/profile",
        "/login",
        "/register",
        "/detail-product",
        "/cart",
        "/payment-status",
        "/sell",
    ]
    const isShowHeader = headerMenu.includes(rest.path)
    const isShowBottom = bottomMenu.includes(rest.path)
    const token = getToken()
    const regexPath = new RegExp('\\w+', 'g')
    const newPath = regexPath.exec(rest.path)?.map((val) => val.toUpperCase().toString())
    const mobileView = isMobile()
    return (
        <div className={`relative h-screen m-auto ${mobileView ? `max-w-md` : `max-w-md`} bg-gray-300`}>
            <div className="flex flex-col h-screen">
                <div className="flex flex-col h-screen">
                    <Header showMenu={isShowHeader} path={newPath} />
                    <div className="w-full overflow-auto h-screen">
                        <Router history={history}>
                            <Route {...rest} render={(props) => (
                                !token ? <Redirect from="/" to="/login" /> : <Component {...props} />
                            )}></Route>
                        </Router>
                    </div>
                    {
                        isShowBottom && <div className="bottom-0 w-full">
                            <Footer />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default CustomRoute