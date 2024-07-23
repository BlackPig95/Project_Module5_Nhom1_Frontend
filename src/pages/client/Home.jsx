import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../components/clientComponents/carousel/Carousel";
import ListMovie from "../../components/clientComponents/listMovie/ListMovie";
import MovieCard from "../../components/clientComponents/movieCard/MovieCard";
import Footer from "../../layouts/client/footer";
import Header from "../../layouts/client/header";
import { useEffect } from "react";
import { fetchAllBannerClient } from "../../services/clientServices/clientBannerServices";

export default function Home()
{
  return (
    <div>
      <div className="bg-black text-white">
        <Header />
        <Carousel />
        <div className="flex flex-row flex-nowrap gap-6 w-full justify-between p-20">
          <div className="flex flex-col gap-10 flex-grow">
            <ListMovie pageName={ "Phim đang chiếu" } />
            <ListMovie pageName={ "Phim sắp chiếu" } />
          </div>
          <div className="flex flex-col w-[20%]">  {/*Gọi api để thêm danh sách sự kiện vào chỗ này */ }
            <div className="flex flex-row justify-between text-xl">
              <h3>Sự kiện</h3>
              <a className="underline" href="">Xem tất cả</a>
            </div>
            <MovieCard movieName={ 'abc' } movieGenres={ [ { name: 'abc' }, { name: 'xyz' } ] } userAdvice={ 'T13' } releaseDate={ '2024 / 12 / 12' } />
            <MovieCard movieName={ 'abc' } movieGenres={ [ { name: 'abc' }, { name: 'xyz' } ] } userAdvice={ 'T13' } releaseDate={ '2024 / 12 / 12' } />
            <MovieCard movieName={ 'abc' } movieGenres={ [ { name: 'abc' }, { name: 'xyz' } ] } userAdvice={ 'T13' } releaseDate={ '2024 / 12 / 12' } />
            <MovieCard movieName={ 'abc' } movieGenres={ [ { name: 'abc' }, { name: 'xyz' } ] } userAdvice={ 'T13' } releaseDate={ '2024 / 12 / 12' } />
          </div>
        </div>
        <Footer />
      </div>

    </div>
  );
}
