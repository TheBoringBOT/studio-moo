import Avatar from "./avatar";
import DateFormatter from "../../utils/date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import ReadingTime from "././../../utils/reading-time";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  postContent,
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
          height={620}
          width={1240}
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/posts/${slug}`}>
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="flex items-center font-semibold justify-between mb-6">
            <div className=" text-lg ">
              <DateFormatter dateString={date} />
            </div>
            <div className=" text-lg">
              <ReadingTime postContent={postContent} />
            </div>
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
}
