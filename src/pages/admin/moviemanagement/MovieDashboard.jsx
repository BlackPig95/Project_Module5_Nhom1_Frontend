import { Button, Pagination } from "antd";
import Search from "antd/es/transfer/search";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMovies } from "../../../services/adminServices/movieServices";

function MovieDashboard()
{
    const dispatch = useDispatch();
    //Loading = trạng thái load khi đang call api
    //data = tên biến => .data = Trường có sẵn của axios => Tiếp tục .data = trường tự đặt bên backend => 
    //.content = trường mặc định của đối tượng pageable bên backend
    //error = thông báo khi xảy ra lỗi khi gọi api
    const { loading, data, error } = useSelector(state => state.movie);
    useEffect(() =>
    {
        dispatch(fetchAllMovies());
    }, []);
    console.log(data);
    return (
        <div>
            <div className="flex flex-row justify-between">
                <h1 className="font-bold">Quản lý danh sách phim</h1>
                <div className="flex flex-row gap-2">
                    <Button type="primary">Thêm phim mới</Button>
                    <Search placeholder="Tìm kiếm phim">ABC</Search>
                </div>
            </div>
            <table className="w-full border-black border text-center mt-6">
                <thead className="border border-black">
                    <tr>
                        <th className="border border-black">Id</th>
                        <th className="border border-black">Tên phim</th>
                        <th className="border border-black">Thể loại phim</th>
                        <th className="border border-black">Phân loại</th>
                        <th className="border border-black">Poster</th>
                        <th className="border border-black" colSpan={ 3 }>Quản lý</th>
                    </tr>
                </thead>
                <tbody className="border border-black">
                    { data?.data?.data?.content?.map(movie =>
                    {
                        return (
                            <tr key={ movie.id }>
                                <td className="border border-black">{ movie.id }</td>
                                <td className="border border-black">{ movie.title }</td>
                                <td className="border border-black">{ movie.genres }</td>
                                <td className="border border-black">{ movie.userAdvice }</td>
                                <td className="border border-black">{ movie.posterUrl }</td>
                                <td className="border border-black"><Button type="primary">Xem chi tiết</Button></td>
                                <td className="border border-black"><Button className="bg-green-600">Sửa thông tin</Button></td>
                                <td className="border border-black"><Button danger>Xóa phim</Button></td>
                            </tr>
                        );
                    }
                    ) }

                </tbody>
            </table>
            <Pagination />
        </div>
    );
}

export default MovieDashboard;