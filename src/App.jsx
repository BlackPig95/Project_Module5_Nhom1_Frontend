import "./App.css";

import { RouterProvider } from "react-router-dom";
import Loading from "./components/clientComponents/Loading";
import { Suspense } from "react";
import routes from "./routes";

export default function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={routes} />
      </Suspense>

      {/* <MovieDetail /> */}
      {/* <Provider store={store}>
        <Home />
      </Provider> */}
    </>
  );
}
