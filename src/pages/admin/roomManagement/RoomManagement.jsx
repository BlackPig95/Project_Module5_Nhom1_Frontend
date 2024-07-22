import { Pagination } from "@mui/material";
import { Button, Modal } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRoom, fetchAllRooms } from "../../../services/adminServices/roomService";
import Search from "antd/es/input/Search";
import FormAddRoom from "../../../components/adminComponents/movie/FormAddRoom";

function RoomManagement()
{
    const dispatch = useDispatch();
    const [ page, setPage ] = useState(1);
    const { data } = useSelector(state => state.room);
    const roomPageableData = data?.data?.data;
    const [ showAddForm, setShowAddForm ] = useState(false);
    const [ roomDeleted, setRoomDeleted ] = useState(null);
    const handleShowAddForm = () =>
    {
        setShowAddForm(true);
    };

    const handleChangePage = (event, value) =>
    {
        setPage(value);
    };
    const handleCloseAddForm = () =>
    {
        setShowAddForm(false);
    };
    const handleEditRoom = (roomId) =>
    {

    };
    const handleDeleteRoom = (roomId) =>
    {
        dispatch(deleteRoom(roomId));
        setRoomDeleted(roomId);
    };
    useEffect(() =>
    {
        dispatch(fetchAllRooms({ page }));
    }, [ page, showAddForm, roomDeleted ]);

    return (
        <>
            { showAddForm && <Modal maskClosable={ false } className="!w-[50%]" onCancel={ handleCloseAddForm } okButtonProps={ { style: { display: 'none' } } } open={ handleShowAddForm } cancelText="Hủy"
                title="Thêm phòng chiếu mới" centered={ true } ><FormAddRoom closeForm={ handleCloseAddForm } /></Modal> }
            <div>
                <div className="flex flex-row justify-between">
                    <h1 className="font-bold">Quản lý danh sách phòng chiếu</h1>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row gap-2">
                            <Button onClick={ handleShowAddForm } type="primary">Thêm phòng chiếu mới</Button>
                            <form onSubmit={ (e) => handleSearch(e) }>
                            </form>
                            <div>
                                <label>Sắp xếp theo: </label>
                                <select className="border border-black ml-4">
                                    <option value={ "id" }>Id</option>
                                    <option value={ "title" }>Tên</option>
                                    <option value={ "userAdvice" }>Sức chứa</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <table className="w-full border-black border text-center mt-6">
                    <thead className="border border-black">
                        <tr>
                            <th className="border border-black w-[5%]">Id</th>
                            <th className="border border-black w-[40%]">Tên phòng chiếu</th>
                            <th className="border border-black">Sức chứa</th>
                            <th className="border border-black w-[20%]" >Trạng thái</th>
                            <th className="border border-black" colSpan={ 2 }>Quản lý</th>
                        </tr>
                    </thead>
                    <tbody className="border border-black">
                        { roomPageableData?.content.map(room =>
                        {
                            return (<tr key={ room.id }>
                                <td className="border border-black">{ room.id }</td>
                                <td className="border border-black">{ room.name }</td>
                                <td className="border border-black">{ room.capacity }</td>
                                <td className="border border-black">{ room.status ? "Đang hoạt động" : "Ngừng hoạt động" }</td>
                                <td className="border border-black"><Button onClick={ () => handleEditRoom(room.id) } className="bg-green-600">Sửa thông tin</Button></td>
                                <td className="border border-black"><Button danger onClick={ () => handleDeleteRoom(room.id) }>Xóa phim</Button></td>
                            </tr>);
                        }) }
                    </tbody>
                </table>
                <Pagination count={ roomPageableData?.totalPages } color="primary" onChange={ handleChangePage } />
            </div>
        </>
    );
}

export default RoomManagement;

