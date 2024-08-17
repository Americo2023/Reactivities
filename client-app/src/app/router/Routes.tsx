import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import AcitvityDashboard from "../../features/acitvities/dashboard/AcitvityDashboard";
import ActivityForm from "../../features/acitvities/form/ActivityForm";
import ActivityDetails from "../../features/acitvities/details/ActivityDetails";
import TestError from "../../errors/TestError";
import NotFound from "../../errors/NotFound";
import ServerError from "../../errors/ServerError";
import LoginForm from "../../features/users/LoginForm";

export const routes: RouteObject[] = [
    {
        path: '/', element: <App />, children: [
            { path: 'activities', element: <AcitvityDashboard /> },
            { path: 'activities/:id', element: <ActivityDetails /> },
            { path: 'createActivity', element: <ActivityForm key='create'/> },
            { path: 'manage/:id', element: <ActivityForm key='manage'/> },
            { path: 'login', element: <LoginForm/> },
            { path: 'errors', element: <TestError /> },
            { path: 'not-found', element: <NotFound /> },
            { path: 'server-error', element: <ServerError /> },
            { path: '*', element: <Navigate replace to='/not-found' /> }
        ]
    }
]

export const router = createBrowserRouter(routes)