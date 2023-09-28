import '../../styles/CustomButton.css';
export interface ICustomButton {
  className: 'prev'|'next';
  text: string;
  handleClick: ()=>void;
}
const CustomButton = ({className,text,handleClick}:ICustomButton) => {
  return (
    <button onClick={handleClick} className={`custom-button ${className}`}>{text}</button>
  )
}
export default CustomButton;