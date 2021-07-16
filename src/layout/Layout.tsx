import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="relative min-h-screen flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <div className="p-10">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
