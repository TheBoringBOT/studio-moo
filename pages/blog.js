import Head from "next/head";
import { SITE_NAME } from "../lib/constants";

// layout components
import Intro from "../components/layout/intro";
import Layout from "../components/layout/layout";
import Container from "../components/layout/container";
import Spacer from "../components/layout/section-separator";

// Blog components
import MoreStories from "../components/blog/more-stories";
import HeroPost from "../components/blog/hero-post";
import { getAllPosts } from "../lib/api";

export default function Blog({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>{SITE_NAME} | Blog</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          <Spacer />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
