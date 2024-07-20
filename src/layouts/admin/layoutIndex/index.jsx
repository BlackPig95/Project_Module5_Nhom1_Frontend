import DashBoard from "../../../pages/admin/dashboard";
import HeaderAdmin from "../header";
import Menu from "../menu";
import "./index.scss";

export default function LayoutIndex() {
  return (
    <>
      <div className="ra-admin-layout">
        <Menu />
        <div className="right">
          <HeaderAdmin />
          <DashBoard />
        </div>
      </div>
    </>
  );
}
