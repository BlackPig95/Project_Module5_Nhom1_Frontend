import { UnorderedListOutlined } from "@ant-design/icons";
import "./index.scss";

export default function HeaderAdmin() {
  return (
    <>
      <header className="ra-admin-header">
        <div className="left">
          <UnorderedListOutlined />
        </div>
        <div className="right">
          <span>Giang</span>
        </div>
      </header>
    </>
  );
}
