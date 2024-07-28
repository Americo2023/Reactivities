import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import AcitvityDashboard from "../../features/acitvities/dashboard/AcitvityDashboard";
import ActivityForm from "../../features/acitvities/form/ActivityForm";
import ActivityDetails from "../../features/acitvities/details/ActivityDetails";

export const routes: RouteObject[] = [
    {
        path: '/', element: <App />, children: [
            { path: 'activities', element: <AcitvityDashboard /> },
            { path: 'activities/:id', element: <ActivityDetails /> },
            { path: 'createActivity', element: <ActivityForm key='create'/> },
            { path: 'manage/:id', element: <ActivityForm key='manage'/> }
        ]
    }
]

export const router = createBrowserRouter(routes)