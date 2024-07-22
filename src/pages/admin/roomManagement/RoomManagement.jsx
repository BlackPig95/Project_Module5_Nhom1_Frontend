import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Button } from "antd";

function RoomManagement()
{
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
                    <tr>
                        <td className="border border-black">ABC</td>
                        <td className="border border-black">ABC</td>
                        <td className="border border-black">ABC</td>
                        <td className="border border-black">ABC</td>
                        <td className="border border-black"><Button onClick={ () => handleEditMovie(movie.id) } className="bg-green-600">Sửa thông tin</Button></td>
                        <td className="border border-black"><Button danger onClick={ () => handleDeleteMovie(movie.id) }>Xóa phim</Button></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default RoomManagement;

