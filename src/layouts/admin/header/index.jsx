import { UnorderedListOutlined } from "@ant-design/icons";
import "./index.scss";

export default function Header() {
  return (
    <>
      <header className="ra-admin-header">
        <div className="left">
          <UnorderedListOutlined />
        </div>
        <div className="right">
          <span>Ngọ Văn Quý</span>
        </div>
      </header>
    </>
  );
}
