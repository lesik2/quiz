import heartImg from '../../assets/icons/heart.svg';
import '../../styles/ItemCart.css';

export interface IItemCart{
 title: string;
 image: string;
 price:number;
 oldPrice: number|null;
}

const ItemCart = ({title,image,price,oldPrice}:IItemCart) => {
  return (
    <div  className="item-cart">
      <div className='item-cart__wrapper__img'>
        <img className='item-cart__img' alt={title.split(' ')[0]} src={image} />
      </div>
      <div className='item-cart__description'>
        <p>{title}</p>
      </div>
      <div className='price-wrapper'>
        {oldPrice !== null?<p className='price-wrapper__old'>{oldPrice.toFixed(2)}</p>: null}
        <p className='price-wrapper__new'>{price.toFixed(2)}
        <span className='price-wrapper-rubles'> руб.</span>
        </p>
      </div>
      <img className='item-cart__like'  alt="like item" src={heartImg}/>
    </div>
  )
}
export default ItemCart;