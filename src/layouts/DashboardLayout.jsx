import { Outlet } from "react-router-dom";
import Sidebar from "../Component/partials/sidebar";
import Sidebr from "../Component/partials/sidebr";

const DashboardLayout=()=>{
  return(
    <main className="flex w-screen">
      <Sidebar/>
      <Outlet/>

    </main>
  );
}
export default DashboardLayout;