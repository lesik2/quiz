import { useEffect, useState } from 'react';
import '../../styles/Result.css';
import ItemCart from './ItemCart';

export interface IProducts{
  id:number;
  title:string;
  image:string;
  price: number;
  oldPrice: number;
}
const Result = () =>{
  useEffect( ()=>{
    fetch('./products.json')
    .then((response)=>response.json())
    .then((res:IProducts[])=>setCarts(res))
    .catch(err=>console.log(err));

  },[])
  const [carts, setCarts] = useState<IProducts[]>([])
  return (
    <div className='result'>
      <h2 className='result__title'>Результат</h2>
      <p className='result__description'>Мы подобрали для вас наиболее подходящие средства</p>
      <div className='result-carts'>
        {carts.map((cart)=>(
          <ItemCart
            title={cart.title}
            image={cart.image}
            price={cart.price}
            oldPrice={cart.oldPrice}
            key={cart.id}
           />
        ))}
      </div>
      <p className='result__pagination'>1 2 3 ... 13</p>
    </div>
  )
}
export default Result;