import { useState } from "react";
import SectionTitle from "../section-title";
import Accordion from "./accordion";
export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(2);
  return (
    <section className="py-3 mx-auto my-28 max-w-7xl ">
      <SectionTitle
        h3={
          <>
            Tempor velit amet <br />
            sint ex.
          </>
        }
      />

      <div className="flex flex-col items-center justify-center max-w-4xl pb-16 mx-auto">
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
    </section>
  );
}

//array of questions and answers for faq
const faqQuestions = [
  {
    question: "How Do I use Studio Moo?",
    answer: "nothing",
  },
  {
    question: "How Do I use Studio Moo?",
    answer: "nothing",
  },
  {
    question: "How Do I use Studio Moo?",
    answer: "nothing",
  },
  {
    question: "How Do I use Studio Moo?",
    answer: "nothing",
  },
  {
    question: "How Do I use Studio Moo?",
    answer: "nothing",
  },
  {
    question: "How Do I use Studio Moo?",
    answer: "nothing",
  },
];
