
import './App.css';
import Carousel from './components/clientComponents/carousel/Carousel';
import ListMovie from './components/clientComponents/listMovie/ListMovie';
import MovieDetail from './pages/client/movieDetail/MovieDetail';
import { Suspense } from 'react';
import { RouterProvider } from "react-router-dom";
import routes from './routes';
import Loading from './components/clientComponents/Loading';
import MovieDashboard from './pages/admin/moviemanagement/MovieDashboard';



export default function App()
{
  return (
    <>
      {/* <Suspense fallback={<Loading/>}>
        <RouterProvider router={routes} />
      </Suspense>
      <MovieDetail /> */}
      <MovieDashboard />
    </>
  );
}
