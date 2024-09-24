import { Sidebar } from "flowbite-react";
import { useContext } from "react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { AuthContext } from "../contexts/AuthProvider";

const MySidebar = () => {
  const {user} = useContext(AuthContext)
  return (
    <Sidebar aria-label="Sidebar with content separator example">
         <Sidebar.Logo href="/" img={user?.photoURL} imgAlt="Profile Logo" className="flex items-center space-x-3 w-16 h-16">
        {
          user?.displayName || "Demo User"
        }
      </Sidebar.Logo>

    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} className="flex items-center space-x-3">
          Dashboard
        </Sidebar.Item>
        <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload} className="flex items-center space-x-3">
          Upload Book
        </Sidebar.Item>
        <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox} className="flex items-center space-x-3">
          Manage Books
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiUser} className="flex items-center space-x-3">
          Users
        </Sidebar.Item>
        <Sidebar.Item href="/shop" icon={HiShoppingBag} className="flex items-center space-x-3">
          Products
        </Sidebar.Item>
        <Sidebar.Item href="/login" icon={HiArrowSmRight} className="flex items-center space-x-3">
          Sign In
        </Sidebar.Item>
        <Sidebar.Item href="/logout" icon={HiTable} className="flex items-center space-x-3">
          Log out
        </Sidebar.Item>

      </Sidebar.ItemGroup>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="#" icon={HiChartPie} className="flex items-center space-x-3">
          Upgrade to Pro
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiViewBoards} className="flex items-center space-x-3">
          Documentation
        </Sidebar.Item>
        <Sidebar.Item href="/contact" icon={BiBuoy} className="flex items-center space-x-3">
          Help
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>
  )
}

export default MySidebar
