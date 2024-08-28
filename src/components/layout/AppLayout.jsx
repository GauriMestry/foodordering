import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import "../../App.css";
import Header from "./Header";

function AppLayout() {
  return (
    <Layout className="appLayout">
      <Header />
      <Outlet />
    </Layout>
  );
}

export default AppLayout;
