import CustomButton from "../ui/CustomButton";
import '../../styles/QuestionCart.css';
import { useState } from "react";

export interface IQuestionCart{
  question: string;
  variants: string[];
  next: ()=>void;
  prev: ()=>void;
  currentQuestion: number;
  questions: number;
  setAnswers: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  answers: Record<string, boolean>;
}

const QuestionCart = ({question, variants, next,prev,currentQuestion, questions, setAnswers, answers}:IQuestionCart) => {
  const [answer, setAnswer]=useState('')
  const createView = () =>{
    const result = [];
    for(let i=0;i<questions;i++){
      if(i === currentQuestion){
        result.push(<li key={i} className="question-cart__view current"></li>)
      }else{
        result.push(<li key={i} className="question-cart__view"></li>)
      }
    }
    return result;
  }
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget.innerText;
    if(variants.includes(answer)){
      setAnswers({...answers,[target]:true,[answer]:false})
    }else{
      setAnswers({...answers,[target]:true})
    }

    setAnswer(target);
  }
  return (
    <div className="question-cart">
      <div className="question-cart__current">
        <ul className="question-cart__views">
          {createView()}
        </ul>
        <p className="question-cart__description">{`Вопрос ${currentQuestion+1} из  ${questions}`}</p>
      </div>
      <div className="question-cart__main">
        <h3 className="question-cart__question">{question}</h3>
        <ul className="question-cart-variants">
          {variants.map(variant=>(
            <li onClick={handleClick} className={answers[variant]?"question-cart-variant clicked":"question-cart-variant"} key={variant}>{variant}</li>
          ))}
        </ul>
      </div>
      <div className="question-cart__navigation">
        {currentQuestion !== 0 ? 
          <CustomButton 
            className="prev"
            text="Назад"
            handleClick={prev}
          />: 
          null
        }
        <CustomButton 
          className="next"
          text="Дальше"
          handleClick={next}
        />
      </div>
    </div>
  )
}
export default QuestionCart;