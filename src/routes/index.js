import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "./publicRoute/index.jsx";
import privateRoutes from "./privateRoute/adminRoute/index.jsx";

const routes = createBrowserRouter([...publicRoutes, ...privateRoutes]);

export default routes;
