
import './App.css';
import Carousel from './components/clientComponents/carousel/Carousel';
import ListMovie from './components/clientComponents/listMovie/ListMovie';
import MovieDetail from './pages/client/movieDetail/MovieDetail';

function App()
{
  return (
    <>
      {/* <Carousel /> */ }
      {/* <ListMovie pageName={ "Phim đang chiếu" } /> */ }
      {/* <ListMovie pageName={ "Phim sắp chiếu" } /> */ }
      <MovieDetail />
    </>
  );
}
