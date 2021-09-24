import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import layouts from "./routes";
import AuthLayout from "../../ui/layouts/temp1/Auth";
import MainLayout from "../../ui/layouts/temp1/Main";
import Home from "../../ui/pages/temp1/Home";
import Login from "../../ui/pages/temp1/Login";
function RenderLoading() {
    return <h1>Loading...</h1>
}
export default function App() {
    return (
        <Router>
            <React.Suspense fallback={<RenderLoading />}>
                <Switch>
                    {layouts.map(({ Layout, pages }, i) => {
                        return (
                            <Route key={i} path={pages.map((page) => page.path)}>
                                <Layout  >
                                    <Switch>
                                        {pages.map((route, i) => {
                                            const Mode = route.mode;
                                            return (
                                                <Mode
                                                    key={i}
                                                    exact={true}
                                                    path={route.path}
                                                    component={route.component}
                                                />
                                            );

                                        })}
                                        <Route path="*" component={() => <h1>NotFound</h1>} />
                                    </Switch>
                                </Layout>
                            </Route>
                        );
                    })}
                    <Route path="*" component={() => <h1>NotFound</h1>} />
                </Switch>

            </React.Suspense>

        </Router>
    );
}
