import type { AppProps } from "next/app";
import Head from "next/head";

import type { MarkdocNextJsPageProps } from "@markdoc/next.js";

import "../styles/globals.css";
import { useState } from "react";
import { Sidebar, TableOfContents } from "../components";
import { Header } from "../components/header";

export type MyAppProps = MarkdocNextJsPageProps;

const TITLE = "AI Engineer Roadmap";
const DESCRIPTION = "A Roadmap to Becoming an AI Engineer";

function collectHeadings(node, sections = []) {
  if (node) {
    if (node.name === "Heading") {
      const title = node.children[0];

      if (typeof title === "string") {
        sections.push({
          ...node.attributes,
          title,
        });
      }
    }

    if (node.children) {
      for (const child of node.children) {
        collectHeadings(child, sections);
      }
    }
  }

  return sections;
}

function App({ Component, pageProps }: AppProps<MyAppProps>) {
  const { markdoc } = pageProps;
  const [show, setShow] = useState(false);

  let title = TITLE;
  let description = DESCRIPTION;

  if (markdoc) {
    if (markdoc.frontmatter.title) {
      title = markdoc.frontmatter.title;
    }
    if (markdoc.frontmatter.description) {
      description = markdoc.frontmatter.description;
    }
  }

  const toc = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : [];

  return (
    <>
      <Head>
        <title>A Roadmap to Becoming an AI Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="relative min-h-screen md:flex">
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
          <div className="p-4 xl:p-10">
            <Component {...pageProps} />
            <TableOfContents toc={toc} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
