import readingTime from "reading-time";

export default function ReadingTime({ postContent }) {
  const stats = readingTime(postContent);
  // ->
  // stats: {
  //   text: '1 min read',
  //   minutes: 1,
  //   time: 60000,
  //   words: 200
  // }
  return (
    <>
      <span className="text-lg">{stats.text}</span>
    </>
  );
}
