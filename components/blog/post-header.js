import Avatar from "./avatar";
import DateFormatter from "../../utils/date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import ReadingTime from "../../utils/reading-time";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  postContent,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="flex items-center font-semibold justify-between mb-6">
          <div className="mb-6 text-lg ">
            <DateFormatter dateString={date} />
          </div>
          <div className="mb-6 text-lg">
            <ReadingTime postContent={postContent} />
          </div>
        </div>
      </div>
    </>
  );
}
