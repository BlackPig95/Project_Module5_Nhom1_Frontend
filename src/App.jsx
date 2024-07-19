import "./App.css";
import MovieDashboard from "./pages/admin/moviemanagement/MovieDashboard";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <>
      {/* <Suspense fallback={<Loading/>}>
        <RouterProvider router={routes} />
      </Suspense>
      <MovieDetail /> */}
      <Provider store={store}>
        <MovieDashboard />
      </Provider>
    </>
  );
}
