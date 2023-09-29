import CustomButton from "../ui/CustomButton";
import '../../styles/QuestionCart.css';
import { useContext} from "react";
import { ResultContext } from "../../context/ResultProvider";

export interface IQuestionCart{
  question: string;
  variants: string[];
  next: ()=>void;
  prev: ()=>void;
  currentQuestion: number;
  questions: number;
  setAnswers: React.Dispatch<React.SetStateAction<Record<string, boolean>[]>>;
  answers: Record<string, boolean>[];
}

const QuestionCart = ({question, variants, next,prev,currentQuestion, questions, setAnswers, answers}:IQuestionCart) => {
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
    if(handleRadioButton(target)){
      setAnswers(answers.filter((item)=>!(target in item)))
    }else{
      const variant = checkPreviousClick();
      if(variant!==''){
        setAnswers([...answers.filter((item)=>!(variant in item)),{[target]:true}])
      }else{
        setAnswers([...answers,{[target]:true}])
      }
    }
  }
  const checkPreviousClick = ()=>{
    for(let i=0;i<variants.length;i++){
      for(let j=0;j<answers.length;j++){
        if(variants[i] in answers[j]){
          return variants[i];
        }
      }
    }
    return '';
  }
  const handleRadioButton = (target:string)=>{
    for(let i=0;i<answers.length;i++){
      if(target in answers[i]){
        return true;
      }
    }
    return false;
  }
  const checkClickedButton=(variant:string)=>{
    for(let i=0;i<answers.length;i++){
      if(variant in answers[i]){
        return true;
      }
    }
    return false;
  }
  const {showResult} = useContext(ResultContext);
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
            <li onClick={handleClick} className={checkClickedButton(variant)?"question-cart-variant clicked":"question-cart-variant"} key={variant}>{variant}</li>
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
          text={currentQuestion+1===questions?"Узнать результат":"Дальше"}
          handleClick={currentQuestion+1===questions?showResult:next}
        />
      </div>
    </div>
  )
}
export default QuestionCart;