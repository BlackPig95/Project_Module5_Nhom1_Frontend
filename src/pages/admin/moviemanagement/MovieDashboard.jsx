import { Button, Modal } from "antd";
import Search from "antd/es/transfer/search";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie, fetchAllMovies } from "../../../services/adminServices/movieServices";
import FormAddMovie from "../../../components/adminComponents/movie/FormAddMovie";
import { Pagination } from "@mui/material";

function MovieDashboard()
{
    const dispatch = useDispatch();
    const [ page, setPage ] = useState(1);
    const handleChangePage = (event, value) =>
    {
        setPage(value);
    };
    //Loading = trạng thái load khi đang call api
    //data = tên biến => .data = Trường có sẵn của axios => Tiếp tục .data = trường tự đặt bên backend => 
    //.content = trường mặc định của đối tượng pageable bên backend
    //error = thông báo khi xảy ra lỗi khi gọi api
    const { loading, data, error } = useSelector(state => state.movie);
    useEffect(() =>
    {
        dispatch(fetchAllMovies(page));
    }, [ page ]);
    const pageableData = data?.data?.data;
    // console.log(data);

    const [ showAddForm, setShowAddForm ] = useState(false);
    const handleShowAddForm = () =>
    {
        setShowAddForm(true);
    };
    const handleCloseAddForm = () =>
    {
        // console.log("Before " + showAddForm);
        setShowAddForm(false);
        // dispatch(fetchAllMovies()); Khiến cho không cập nhật được state khi gọi từ component FormAddMovie?
        // console.log("After " + showAddForm);
    };
    const handleDeleteMovie = (id) =>
    {
        console.log("Call delete");
        dispatch(deleteMovie(id));
    };

    return (
        <>
            {/* { console.log("In view " + showAddForm) } */ }
            { console.log(pageableData?.content) }
            { showAddForm && <Modal className="!w-[50%]" onCancel={ handleCloseAddForm } okButtonProps={ { style: { display: 'none' } } } open={ handleShowAddForm } cancelText="Hủy"
                title="Thêm phim mới" centered={ true } ><FormAddMovie closeForm={ handleCloseAddForm } /></Modal> }
            <div>
                <div className="flex flex-row justify-between">
                    <h1 className="font-bold">Quản lý danh sách phim</h1>
                    <div className="flex flex-row gap-2">
                        <Button type="primary" onClick={ handleShowAddForm }>Thêm phim mới</Button>
                        <Search placeholder="Tìm kiếm phim"></Search>
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
                        { pageableData?.content?.map(movie =>
                        {
                            return (
                                <tr key={ movie.id }>
                                    <td className="border border-black">{ movie.id }</td>
                                    <td className="border border-black">{ movie.title }</td>
                                    <td className="border border-black">{ movie.genres.name }</td>
                                    <td className="border border-black">{ movie.userAdvice }</td>
                                    <td className="border border-black">{ movie.posterUrl }</td>
                                    <td className="border border-black"><Button type="primary">Xem chi tiết</Button></td>
                                    <td className="border border-black"><Button className="bg-green-600">Sửa thông tin</Button></td>
                                    <td className="border border-black"><Button danger onClick={ () => handleDeleteMovie(movie.id) }>Xóa phim</Button></td>
                                </tr>
                            );
                        }
                        ) }
                    </tbody>
                </table>
                <Pagination count={ pageableData?.totalPages } color="primary" onChange={ handleChangePage } />
            </div>
        </>
    );
}

export default MovieDashboard;