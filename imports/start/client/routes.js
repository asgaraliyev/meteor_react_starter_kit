import React from 'react';

//
// ────────────────────────────────────────────────────────────────── LAYOUTS ─────
//
const MainLayout = React.lazy(() => import("../../ui/layouts/temp1/Main"))
const AuthLayout = React.lazy(() => import("../../ui/layouts/temp1/Auth"))

//
// ────────────────────────────────────────────────────────────── ROUTE TYPES ─────
//

import Private from "../../ui/route_types/Private";
import Public from "../../ui/route_types/Public";


//
// ──────────────────────────────────────────────────────────────────── PAGES ─────
//
const Home = React.lazy(() => import("../../ui/pages/temp1/Home"))
const Login = React.lazy(() => import("../../ui/pages/temp1/Login"))
const SignUp = React.lazy(() => import('../../ui/pages/temp1/SignUp'))

const layouts = [
    {
        Layout: MainLayout,
        pages: [
            {
                path: "/home",
                title: "Home",
                mode: Private,
                component: Home,
            },

        ],
    },
    {
        Layout: AuthLayout,
        pages: [
            {
                path: "/sign-up",
                title: "Sign Up",
                mode: Private,
                component: SignUp,
            },
            {
                path: "/login",
                title: "Login",
                mode: Private,
                component: Login,
            },
        ],
    },
];


export default layouts;