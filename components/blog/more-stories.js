import PostPreview from "./post-preview";

export default function MoreStories({ posts, lang_blog_content }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        {lang_blog_content.more_posts}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            postContent={post.content}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
