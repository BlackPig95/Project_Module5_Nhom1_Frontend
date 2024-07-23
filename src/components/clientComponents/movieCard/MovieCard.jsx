//Gọi API lấy ra list các movie, truyền các props vào component để render
function MovieCard({ movieGenres, movieName, userAdvice, releaseDate, movieImage })
{
    return (
        <div className="cursor-pointer shadow-lg text-white">
            <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                <img
                    alt={ `${ movieName }-${ userAdvice }` }
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                    sizes="230px"
                    src={ movieImage }
                    style={ {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: 0,
                        color: "transparent"
                    } }
                />
            </div>
            <div>
                <div className="flex flex-wrap items-center gap-x-5 text-sm mt-3">
                    <p>{ movieGenres.map((genre) =>
                    {
                        //movieGenre sẽ là một list các genre => Dùng map để render
                        return (<span>{ `${ genre.name } | ` }</span>);
                    }) }</p>
                    <p>{ releaseDate }</p>
                </div>
                <p className="mt-2 text-sm xl:text-base font-bold">{ movieName }-{ userAdvice }</p>
            </div>
        </div>

    );
}

export default MovieCard;