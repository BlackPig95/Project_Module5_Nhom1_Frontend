//Gọi API lấy ra list các movie, truyền các props vào component để render
function MovieCard({ movieGenres, movieName, userAdvice, releaseDate })
{
    return (
        <div className="cursor-pointer shadow-lg">
            <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                <img
                    alt={ `${ movieName }-${ userAdvice }` }
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                    sizes="230px"
                    src="https://cdnphoto.dantri.com.vn/COm1qksauO2sqAC-gVVI2DdH_1I=/thumb_w/1020/2023/01/24/khoa-hocdocx-1674520013659.png"
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
                <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                    <p>{ movieGenres.map((genre) =>
                    {
                        //movieGenre sẽ là một list các genre => Dùng map để render
                        return (<span>{ `${ genre.name }, ` }</span>);
                    }) }</p>
                    <p>{ releaseDate }</p>
                </div>
                <p className="mt-2 text-sm xl:text-base font-bold">BÉ MA CỦA ANH-T16</p>
            </div>
        </div>

    );
}

export default MovieCard;