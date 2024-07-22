function MovieDetail()
{
    return (
        <>
            <div className="relative block xl:hidden px-4 md:px-6 pb-10 -mt-[120px] z-30">
                <div className="flex items-center gap-4">
                    <div className="h-[200px] w-full max-w-[150px] md:w-[200px] md:max-w-[200px] md:h-[250px] relative">
                        <img
                            alt="XIN CHÀO JADOO: ĐẠI DƯƠNG DIỆU KỲ-P ( Lồng tiếng )"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover rounded-xl shadow-lg"
                            sizes="(min-width: 780px) 200px, (min-width: 360px) 150px, calc(72.5vw - 98px)"
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
                        <div className="flex items-center gap-2 mt-2">
                            <h3 className="font-bold md:text-xl">
                                XIN CHÀO JADOO: ĐẠI DƯƠNG DIỆU KỲ-P ( Lồng tiếng )
                            </h3>
                            <div className="rounded-md p-1 border border-white font-bold text-sm md:text-base">
                                2D
                            </div>
                        </div>
                        <div className="flex items-center mt-2 gap-x-2 text-sm md:text-base flex-wrap">
                            <p />
                            <p>- Hàn Quốc</p>
                            <p>- 79 phút</p>
                        </div>
                    </div>
                </div>
                <div className="text-sm flex flex-col mt-4">
                    <div className="flex items-center mt-2 gap-5 text-sm md:text-base">
                        <p>Đạo diễn: Son Seok Woo</p>
                    </div>
                    <p>Diễn viên: .</p>
                    <p>Khởi chiếu: 19/07/2024</p>
                    <p className="mt-4 line-clamp-4">
                        Xin Chào Jadoo: Đại Dương Diệu Kỳ là câu chuyện phiêu lưu kỳ thú của Jadoo
                        cùng những người bạn, vén màn loạt truyện cổ tích quen thuộc về biển cả,
                        nhưng lần nảy sẽ được kể theo cách siêu hài hước, thú vị, và đậm chất nhà
                        Choi.
                    </p>
                    <div className="text-red-500 mt-5">
                        Khuyến cáo: P - PHIM ĐƯỢC PHÉP PHỔ BIẾN ĐẾN NGƯỜI XEM Ở MỌI ĐỘ TUỔI.
                    </div>
                    <div className="mt-4 flex items-center justify-center gap-4 flex-1">
                        <button
                            type="button"
                            aria-haspopup="dialog"
                            aria-expanded="false"
                            aria-controls="radix-:r2b:"
                            data-state="closed"
                            className="text-sm underline"
                        >
                            Chi tiết nội dung
                        </button>
                        <button
                            className="border border-yellow-500 rounded-full py-2 px-10 text-yellow-500 hover:scale-105"
                            type="button"
                            aria-haspopup="dialog"
                            aria-expanded="false"
                            aria-controls="radix-:r2e:"
                            data-state="closed"
                        >
                            Xem trailer
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieDetail;