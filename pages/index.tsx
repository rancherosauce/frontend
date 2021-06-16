import { Box, Button, Container, Text, useColorMode } from "@chakra-ui/react";
import { getViewPaths, MDXVIEWS_PATH } from "utils/mdx";
import { supabase } from "utils/supabase";
import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";
import path from "path";
import NavigationOverlay from "components/NavigationOverlay";
import Waitlist from "components/Waitlist/Waitlist";
import { ThemeSwitcher } from "components/ThemeSwitcher";

export default function Index({ posts, user: passedUser }) {
  const { colorMode, setColorMode } = useColorMode();

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
      <Container w="400px" centerContent my={24}>
        <ThemeSwitcher />
        {!passedUser && <Waitlist />}
        {passedUser && <NavigationOverlay />}
        {posts?.length && (
          <ul>
            {posts.map((post) => (
              <li key={post.filePath}>
                <Link
                  as={`/${post.filePath.replace(/\.mdx?$/, "")}`}
                  href={`/[slug]`}
                >
                  <Text
                    as="a"
                    fontSize="max(10vh,5rem)"
                    lineHeight="1"
                    cursor="pointer"
                  >
                    {post.data.title}
                  </Text>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </Box>
  );
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);
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
