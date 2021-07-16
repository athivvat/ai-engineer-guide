import clsx from "clsx";
import { Ads } from "../ads";

const Sidebar = ({ show }) => {
  return (
    <div
      className={clsx(
        "flex flex-col justify-between bg-blue-700 text-white w-64 p-4 absolute md:relative md:translate-x-0 inset-y-0 left-0 transform transition duration-200 ease-in-out",
        !show && "-translate-x-full"
      )}
    >
      <div>
        <a
          href="/"
          className="font-medium tracking-wider transition-colors hover:text-white uppercase focus:text-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 focus-visible:ring-opacity-60 focus-visible:outline-none focus:outline-none rounded"
        >
          AI Engineer Roadmap
        </a>
        <nav></nav>
      </div>
      <Ads />
    </div>
  );
};

export default Sidebar;
