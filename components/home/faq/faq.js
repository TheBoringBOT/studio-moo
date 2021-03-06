import { useState } from "react";
import SectionTitle from "../section-title";
import Accordion from "./accordion";
export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(2);
  return (
    <div className="py-5 mx-auto pb-28 max-w-7xl ">
      <SectionTitle
        h3={
          <span className="text-light-grey">
            Tempor velit amet <br />
            sint ex.
          </span>
        }
      />

      <div className="flex flex-col items-center justify-center max-w-4xl pb-16 mx-auto ">
        {/* map over faqQuestions  */}
        {faqQuestions.map((question, index) => (
          <Accordion
            title={question.question}
            index={index + 2}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            <p> {question.answer}</p>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

//array of questions and answers for faq
const faqQuestions = [
  {
    question: "How Do I use Studio Moo?",
    answer:
      "the answer is here and you can see it, but if you want to see it you have to click on the question",
  },
  {
    question: "How Do I use Studio Moo?",
    answer:
      "the answer is here and you can see it, but if you want to see it you have to click on the question",
  },
  {
    question: "How Do I use Studio Moo?",
    answer:
      "the answer is here and you can see it, but if you want to see it you have to click on the question",
  },
  {
    question: "How Do I use Studio Moo?",
    answer:
      "the answer is here and you can see it, but if you want to see it you have to click on the question",
  },
  {
    question: "How Do I use Studio Moo?",
    answer:
      "the answer is here and you can see it, but if you want to see it you have to click on the question",
  },
  {
    question: "How Do I use Studio Moo?",
    answer:
      "the answer is here and you can see it, but if you want to see it you have to click on the question",
  },
];
