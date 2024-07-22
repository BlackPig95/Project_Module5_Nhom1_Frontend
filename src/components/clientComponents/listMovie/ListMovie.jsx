import MovieCard from "../movieCard/MovieCard";

function ListMovie({ pageName })
{
    return (
        <>
            <div className="flex items-center gap-2">
                <div className="rounded-full bg-red-500 w-4 h-4"></div>
                { <h3 className="font-bold md:text-2xl">{ pageName }</h3> }
            </div>
            <div className="grid grid-cols-4 gap-4">
                <MovieCard movieName={ 'abc' } movieGenres={ [ { name: 'abc' }, { name: 'xyz' } ] } userAdvice={ 'T13' } releaseDate={ '2024 / 12 / 12' } />
                <MovieCard movieName={ 'abc' } movieGenres={ [ { name: 'abc' }, { name: 'xyz' } ] } userAdvice={ 'T13' } releaseDate={ '2024 / 12 / 12' } />
                <MovieCard movieName={ 'abc' } movieGenres={ [ { name: 'abc' }, { name: 'xyz' } ] } userAdvice={ 'T13' } releaseDate={ '2024 / 12 / 12' } />
                <MovieCard movieName={ 'abc' } movieGenres={ [ { name: 'abc' }, { name: 'xyz' } ] } userAdvice={ 'T13' } releaseDate={ '2024 / 12 / 12' } />
            </div>
        </>
    );
}

export default ListMovie;