import { useState } from "react";
import { Header } from "../header";
import { Sidebar } from "../sidebar";

const Layout = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="relative min-h-screen md:flex">
        <div className="flex justify-between bg-gray-800 text-gray-100 md:hidden">
          <a
            href="/"
            className="font-medium p-4 tracking-wider transition-colors hover:text-white uppercase focus:text-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 focus-visible:ring-opacity-60 focus-visible:outline-none focus:outline-none rounded"
          >
            AI Engineer Roadmap
          </a>
          <button
            className="p-4 focus:outline-none focus:bg-gray-700"
            onClick={() => setShow(!show)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <Sidebar show={show} />
        <div className="flex-1">
          <Header />
          <div className="p-4 xl:p-10">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
