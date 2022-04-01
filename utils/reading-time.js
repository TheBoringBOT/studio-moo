import readingTime from "reading-time";
import { renderLanguageContent } from "../utils/language/render-language-content";

export default function ReadingTime({ postContent }) {
  const currentLanguage = renderLanguageContent().lang_current;
  console.log(currentLanguage);
  const stats = readingTime(postContent);
  let text = stats.text;
  // ->
  // stats: {
  //   text: '1 min read',
  //   minutes: 1,
  //   time: 60000,
  //   words: 200
  // }

  return (
    <>
      <span className="text-lg">
        {/* if current lang swedish then change text */}
        {currentLanguage === "se"
          ? stats.text.replace("min read", "minuter att läsa")
          : stats.text}
      </span>
    </>
  );
}
