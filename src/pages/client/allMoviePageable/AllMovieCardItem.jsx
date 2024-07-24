import { Card } from "antd";
import Meta from "antd/es/card/Meta";

function AllMovieCardItem()
{
    return (
        <Card className="border border-slate-500"
            hoverable
            style={ { width: 240 } }
            cover={ <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" /> }
        >
            <Meta title="Tên phim" className="text-center" />
        </Card>
    );
}

export default AllMovieCardItem;