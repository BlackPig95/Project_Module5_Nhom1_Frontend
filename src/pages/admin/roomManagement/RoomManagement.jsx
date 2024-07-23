import { Pagination } from "@mui/material";
import { Button, Modal } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRoom, editRoom, fetchAllRooms } from "../../../services/adminServices/roomService";
import Search from "antd/es/input/Search";
import FormAddRoom from "../../../components/adminComponents/movie/FormAddRoom";
import FormEditRoom from "../../../components/adminComponents/movie/FormEditRoom";

function RoomManagement()
{
    const dispatch = useDispatch();
    const [ page, setPage ] = useState(1);
    const { data } = useSelector(state => state.room);
    const roomPageableData = data?.data?.data;
    const [ showAddForm, setShowAddForm ] = useState(false);
    const [ showEditForm, setShowEditForm ] = useState(false);
    const [ roomDeleted, setRoomDeleted ] = useState(null);
    const [ roomEdited, setRoomEdited ] = useState(null);
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
    const handleShowEditForm = (room) =>
    {
        setShowEditForm(true);
        setRoomEdited(room);
    };
    const handleCloseEditForm = () =>
    {
        setShowEditForm(false);
    };
    const handleDeleteRoom = (roomId) =>
    {
        dispatch(deleteRoom(roomId));
        setRoomDeleted(roomId);
    };
    useEffect(() =>
    {
        dispatch(fetchAllRooms({ page }));
    }, [ page, showAddForm, roomDeleted, showEditForm ]);

    return (
        <>
            { showAddForm && <Modal maskClosable={ false } className="!w-[50%]" onCancel={ handleCloseAddForm } okButtonProps={ { style: { display: 'none' } } } open={ handleShowAddForm } cancelText="Hủy"
                title="Thêm phòng chiếu mới" centered={ true } ><FormAddRoom closeForm={ handleCloseAddForm } /></Modal> }
            { showEditForm && <Modal maskClosable={ false } className="!w-[50%]" onCancel={ handleCloseEditForm } okButtonProps={ { style: { display: 'none' } } } open={ handleShowEditForm } cancelText="Hủy"
                title="Chỉnh sửa thông tin phòng chiếu" centered={ true } ><FormEditRoom roomToBeEdited={ roomEdited } closeForm={ handleCloseEditForm } /></Modal> }
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
                                <td className="border border-black"><Button onClick={ () => handleShowEditForm(room) } className="bg-green-600">Sửa thông tin</Button></td>
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

