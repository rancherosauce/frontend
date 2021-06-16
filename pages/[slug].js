import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import CustomLink from "../components/CustomLink";
import View from "../components/View";
import { getViewPaths, MDXVIEWS_PATH } from "../utils/mdx";
import * as chakraComponents from "@chakra-ui/react";

// const Foo = dynamic(() => import("../components/Foo"));

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const defaultComponents = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  TestComponent: dynamic(() => import("../components/TestComponent")),
  Head,
  ...chakraComponents,
};

export default function PostPage({ source, frontMatter, componentNames }) {
  const components = {
    ...defaultComponents,
    Foo: componentNames.includes("Foo") ? Foo : null,
  };

  return (
    <View>
      <header>
        <nav>
          <Link href="/">
            <a>👈 Go back home</a>
          </Link>
        </nav>
      </header>
      <div className="post-header">
        <h1>{frontMatter.title}</h1>
        {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )}
      </div>
      <main>
        <MDXRemote {...source} components={components} />
      </main>

      <style jsx>{`
        .post-header h1 {
          margin-bottom: 0;
        }

        .post-header {
          margin-bottom: 2rem;
        }
        .description {
          opacity: 0.6;
        }
      `}</style>
    </View>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(MDXVIEWS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);
  // const componentNames = [/<Foo/.test(content) ? "Foo" : null].filter(Boolean);
  const componentNames = [];

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      componentNames,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getViewPaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
