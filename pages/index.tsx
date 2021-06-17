import { Box, Container, Text } from "@chakra-ui/react";
import { getViewPaths, MDXVIEWS_PATH } from "utils/mdx";
import { supabase } from "utils/supabase";
import { ThemeSwitcher } from "components/ThemeSwitcher";
import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";
import NavigationOverlay from "components/NavigationOverlay";
import path from "path";
import Waitlist from "components/Waitlist/Waitlist";

export default function Index({ posts, user: passedUser }) {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      h="var(--100vh)"
      overflow="auto"
    >
      <Box my={24} px={10}>
        <ThemeSwitcher />
        {!passedUser && <Waitlist />}
        {passedUser && <NavigationOverlay />}
        {posts?.length && (
          <ul style={{ listStyle: "none" }}>
            {posts.map((post) => (
              <li key={post.filePath}>
                <Link
                  as={`/${post.filePath.replace(/\.mdx?$/, "")}`}
                  href={`/[slug]`}
                >
                  <Text as="a" fontSize="6xl" cursor="pointer">
                    {post.data.title}
                  </Text>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Box>
    </Box>
  );
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  // Redirect to Login, if no user was found
  if (!user) {
    return { props: {}, redirect: { destination: "/login", permanent: false } };
  }

  const posts =
    user &&
    getViewPaths.map((filePath: any) => {
      const source = fs.readFileSync(path.join(MDXVIEWS_PATH, filePath));
      const { content, data } = matter(source);
      return {
        content,
        data,
        filePath,
      };
    });

  return { props: { posts, user } };
}
