import { useState } from "react";
import { dataTest } from "../../data/data";
import QuestionCart from "./QuestionCart";
import '../../styles/Test.css'

const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const nextQuestion = () => {
    setCurrentQuestion(prev=>prev+1)
  }
  const prevQuestion = () => {
    setCurrentQuestion(prev=>prev-1)
  }
  const [answers, setAnswers] = useState({} as Record<string, boolean>)
  console.log(answers);
  return (
    <div className="test">
      <h2 className="test__title">{'Онлайн-подбор средств для лица'}</h2>
      <p className="test__description">Пройдите короткий тест и получите список наиболее
         подходящих для вас косметических продуктов
      </p>
      <QuestionCart 
        question = {dataTest[currentQuestion].question}
        variants = {dataTest[currentQuestion].variants}
        next={nextQuestion}
        prev={prevQuestion}
        currentQuestion={currentQuestion}
        questions={dataTest.length}
        setAnswers={setAnswers}
        answers={answers}
      />
    </div>
  )
}
export default Test;