import clsx from "clsx";
import { useRouter } from "next/router";
import Link from "next/link";
import { Ads } from "../ads";

const items = [
  {
    title: "Getting Started",
    links: [{ href: "/introduction", children: "Introduction" }],
  },
  {
    title: "I. Mathematics",
    links: [{ href: "/mathematics", children: "Introduction" }],
  },
  {
    title: "II. Computer Science",
    links: [{ href: "/cs", children: "Introduction" }],
  },
  {
    title: "III. Aritificial Intelligence",
    links: [{ href: "/ai", children: "Introduction" }],
  },
  {
    title: "IV. Cracking Interviews",
    links: [{ href: "/cracking-interviews", children: "Introduction" }],
  },
  {
    title: "Appendix ",
    links: [
      { href: "/appendix/online-courses", children: "Appendix A: Online Courses" },
      { href: "/appendix/books", children: "Appendix B: Books" },
      { href: "/appendix/software-and-tools", children: "Appendix C: Software & Tools" },
      { href: "/appendix/projects", children: "Appendix D:  Learning Projects" },
    ],
  }
];

const Sidebar = ({ show }) => {
  const router = useRouter();

  return (
    <div
      className={clsx(
        "flex flex-col justify-between bg-blue-700 text-white w-80 p-4 absolute md:relative md:translate-x-0 inset-y-0 left-0 transform transition duration-200 ease-in-out",
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
        <nav className="sidenav border-t border-white/20 py-4 mt-4 font-light">
          <Link href="/foreword">
            <a className="text-sm">Foreword</a>
          </Link>
          {items.map((item) => (
            <div key={item.title}>
              <span className="font-medium">{item.title}</span>
              <ul className="pl-4">
                {item.links.map((link) => {
                  const active = router.pathname === link.href;
                  return (
                    <li key={link.href} className={active ? "active" : ""}>
                      <Link {...link}>
                        <a href={link.href} className="text-sm">
                          {link.children}
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <Ads />
      <style jsx>
        {`
          nav {
            position: sticky;
            top: var(--top-nav-height);
            height: calc(100vh - var(--top-nav-height));
            flex: 0 0 auto;
            overflow-y: auto;
            border-right: 1px solid var(--border-color);
          }
        `}
      </style>
    </div>
  );
};

export default Sidebar;
