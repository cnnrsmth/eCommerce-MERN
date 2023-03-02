import './Product.css'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
  return (
    <div className="product">
      <div>
        <img src={product.imageUrl} alt="product name"/>
      </div>
      <div className="product__info">
        <p className="info__name">{product.name}</p>
        <p className="info__description">{product.tagLine}</p>
        <p className="info__price">£{product.price}</p>
        <div className="info__button-container">
          <Link to={ `/product/${product._id}` } className="info__button">View</Link>
        </div>
      </div>
    </div>
  )
}

export default Product