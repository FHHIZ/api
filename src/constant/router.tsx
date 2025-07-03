import { createBrowserRouter } from 'react-router-dom'
import { listed } from './listed'
import Login from '../pages/Login';
import Home from '../pages/Home';

const Route: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
    {
        path: listed.home,
        element: <Home />
    },
    {
        path: listed.login,
        element: <Login />,
    },
])
export default Route;
