import React from 'react';
import routes from '../../routing/routes';
import {Switch, Route, Redirect} from "react-router-dom";
import Navbar from './component/navbar';
import Sidebar from "./component/sidebar";
import Footer from "./component/footer";
import "../../assets/admin/css/styles.css";
import "../../assets/admin/js/scripts.js";
const Indexlayout = () => {
    return (
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <Switch>
                            {routes.map((route, idx) => {
                                return (
                                    route.component && (
                                        <Route key={idx}
                                               path={route.path}
                                               exact={route.exact}
                                               name={route.name}
                                               render={(props) => (
                                                   <route.component {...props} />
                                               )}
                                        />
                                    )
                                )
                            })}
                            <Redirect from="admin" to="/admin/dashboard" />
                        </Switch>
                        {/*<Routes>*/}
                        {/*    {routes.filter(route => route.component)*/}
                        {/*        .map(({ path, component: Component }, idx) => (*/}
                        {/*            <Route*/}
                        {/*                key={idx}*/}
                        {/*                path={path}*/}
                        {/*                element={<Component />}*/}
                        {/*            />*/}
                        {/*        ))}*/}
                        {/*    <Route*/}
                        {/*        from="/admin"*/}
                        {/*        element={<Navigate to="/admin/dashboard"/>}*/}
                        {/*    />*/}
                        {/*</Routes>*/}
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Indexlayout;