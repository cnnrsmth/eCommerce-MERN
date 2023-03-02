import './HomeScreen.css'
import Product from '../components/Product.js'
import { useGetAllProductsQuery } from '../redux/productsApi'

const HomeScreen = () => {
  const { data, error, isLoading } = useGetAllProductsQuery()
  return (
    <div className="homescreen">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured, try reloading...</p>
      ) : (
        <>
          <div className="products__body">
            <h1>Our Latest Bundles</h1>
            <p>Unlock your body's full potential with our expertly crafted supplement bundles designed to reverse the aging process of your body's vital organ systems. Our products have been carefully curated by world-renowned health and longevity experts and independently tested for maximum efficacy. Using cutting-edge AI technology, we continuously optimize our formulas based on the latest medical research to ensure you're getting the best results possible. Try our product bundles today and take the first step towards a healthier, younger you!</p>
          </div>
          <div className="homescreen__products">
            {data?.map((product) => <Product key={product._id} product={product} />)}
          </div>
        </>
      )}
    </div>
  )
}

export default HomeScreen