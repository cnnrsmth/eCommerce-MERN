import './ProductScreen.css'
import { useDispatch } from "react-redux"
import { useState, useEffect } from 'react'
import { useGetProductByIdQuery } from "../redux/productsApi";
import { useParams } from 'react-router-dom';
import { addToCart , getTotals } from '../redux/cartSlice';

const ProductScreen = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetProductByIdQuery(id)

  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    dispatch(getTotals())
  }

  const [mainStrapline, setMainStrapline] = useState('');
  const [subStrapline, setSubStrapline] = useState('');
  const [ingredientIntro, setIngredientIntro] = useState('');
  const [ingredientList, setIngredientList] = useState('');
  const [ingredientRationale, setIngredientRationale] = useState('');

  useEffect(() => {
    if (data){
      setMainStrapline(data.description.substring(data.description.indexOf('<h2>'), data.description.indexOf('</h2>') + 5))
      setSubStrapline(data.description.substring(data.description.indexOf('</h2>') + 5, data.description.indexOf('</p>', data.description.indexOf('<h2>')) + 5))
      setIngredientIntro(data.description.substring(data.description.indexOf('<h3>'), data.description.indexOf('</h3>') + 5))
      setIngredientList(data.description.substring(data.description.indexOf('<ul>'), data.description.indexOf('</ul>') + 5))
      setIngredientRationale(data.description.substring(data.description.indexOf('</ul>') + 5, data.description.lastIndexOf('</p>') + 5))
    }
  }, [data])

  return (

    <div className="productscreen">
      {isLoading? (
        <p>Loading...</p>
      ) : error? (
        <p>An error occured, try reloading...</p>
      ) : (
        <div className="product__container">
          <div className="products__name">
            <h1>{data.name}</h1>
            <span className="sub__strapline" dangerouslySetInnerHTML={{ __html: subStrapline }}></span>
          </div>
          <div className="middle__container">
            <div className="img__container">
              <img src={data.imageUrl} alt=""/>
            </div>
            <div className="description__container">
              <span className="main__strapline" dangerouslySetInnerHTML={{ __html: mainStrapline }}></span>
            </div>
            <div className="right__info">
              <div className="order__box">
                <p>
                  Price: <span>£{data.price}</span>
                </p>
                <p>
                  Status: <span>In Stock</span>
                </p>
                <p>
                  <button type="button" onClick= {() => handleAddToCart(data)}>Add to Cart</button>
                </p>
              </div>
            </div>
          </div>
          <div className="ingredients__container">
            <div className="ingredient__intro">
              <div dangerouslySetInnerHTML={{ __html: ingredientIntro }}></div>
            </div>
            <div className="ingredient__rationale">
              <div dangerouslySetInnerHTML={{ __html: ingredientRationale }}></div>
            </div>
            <div className="ingredient__list">
              <div dangerouslySetInnerHTML={{ __html: ingredientList }}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductScreen