import { Ads } from "../ads"

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between bg-blue-700 text-blue-50 w-64 p-4">
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
