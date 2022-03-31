import Avatar from "./avatar";
import DateFormatter from "../../utils/date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import ReadingTime from "../../utils/reading-time";

export default function PostPreview({
  title,
  postContent,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={556}
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug line-clamp-2">
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
      <p className="text-lg leading-relaxed mb-4 line-clamp-3">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}
