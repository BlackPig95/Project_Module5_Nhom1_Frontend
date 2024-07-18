import { Button } from "antd";
import Search from "antd/es/transfer/search";

function MovieDashboard()
{
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
                    <tr>
                        <td className="border border-black">1</td>
                        <td className="border border-black">Phim 1</td>
                        <td className="border border-black">Hài</td>
                        <td className="border border-black">T13</td>
                        <td className="border border-black">Dường dẫn ảnh</td>
                        <td className="border border-black"><Button type="primary">Xem chi tiết</Button></td>
                        <td className="border border-black"><Button className="bg-green-600">Sửa thông tin</Button></td>
                        <td className="border border-black"><Button danger>Xóa phim</Button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default MovieDashboard;