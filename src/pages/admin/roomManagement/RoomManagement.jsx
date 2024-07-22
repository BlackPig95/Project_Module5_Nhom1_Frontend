import { Pagination } from "@mui/material";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllRooms } from "../../../services/adminServices/roomService";

function RoomManagement()
{
    const dispatch = useDispatch();
    const [ page, setPage ] = useState(1);
    const { data } = useSelector(state => state.room);
    const roomPageableData = data?.data?.data;

    const handleChangePage = (event, value) =>
    {
        setPage(value);
    };
    useEffect(() =>
    {
        dispatch(fetchAllRooms({ page }));
    }, [ page ]);
    return (
        <>
            <table className="w-full border-black border text-center mt-6">
                <thead className="border border-black">
                    <tr>
                        <th className="border border-black">Id</th>
                        <th className="border border-black">Tên phòng chiếu</th>
                        <th className="border border-black">Sức chứa</th>
                        <th className="border border-black">Trạng thái</th>
                        <th className="border border-black" colSpan={ 2 }>Quản lý</th>
                    </tr>
                </thead>
                <tbody className="border border-black">
                    { roomPageableData?.content.map(room =>
                    {
                        return (<tr>
                            <td className="border border-black">{ room.id }</td>
                            <td className="border border-black">{ room.name }</td>
                            <td className="border border-black">{ room.capacity }</td>
                            <td className="border border-black">{ room.status ? "Đang hoạt động" : "Ngừng hoạt động" }</td>
                            <td className="border border-black"><Button onClick={ () => handleEditMovie(movie.id) } className="bg-green-600">Sửa thông tin</Button></td>
                            <td className="border border-black"><Button danger onClick={ () => handleDeleteMovie(movie.id) }>Xóa phim</Button></td>
                        </tr>);
                    }) }
                    <Pagination count={ roomPageableData?.totalPages } color="primary" onChange={ handleChangePage } />
                </tbody>
            </table>
        </>
    );
}

export default RoomManagement;

