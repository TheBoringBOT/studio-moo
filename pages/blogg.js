import Head from "next/head";
import { SITE_BLOG_META_TITLE, SITE_BLOG_DESCRIPTION } from "../lib/constants";

// layout components
import Intro from "../components/blog/intro";
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
          <title>{SITE_BLOG_META_TITLE}</title>
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
              postContent={heroPost.content}
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
    "content",
  ]);

  return {
    props: { allPosts },
  };
}
