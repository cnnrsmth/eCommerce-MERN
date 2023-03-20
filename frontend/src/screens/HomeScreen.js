import "./HomeScreen.css";

import { useGetAllProductsQuery } from "../redux/productsApi";
import { faHandHoldingMedical } from "@fortawesome/free-solid-svg-icons";
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import Product from "../components/Product.js";
import Footer from "../components/Footer";

const HomeScreen = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  return (
    <div className="homescreen">
      <div className="products__body">
        <h1>Latest Bundles</h1>
        <div className="products__features">
          <div className="feature__card">
            <i className="fas fa-hand-holding-medical fa-4x"></i>
            <h2>Reverse Ageing</h2>
            <p>
              Unlock your body's full potential with our expertly crafted
              supplement bundles designed to reverse the ageing process of your
              body's vital organ systems
            </p>
          </div>
          <div className="feature__card">
            <i className="fas fa-user-doctor fa-4x"></i>
            <h2>Expertly Curated</h2>
            <p>
              Our products have been carefully curated by world-renowned health
              and longevity experts and independently tested for maximum
              efficacy
            </p>
          </div>
          <div className="feature__card">
            <i className="fas fa-brain fa-4x"></i>
            <h2>AI Informed</h2>
            <p>
              Using cutting-edge AI technology, we continuously optimize our
              formulas based on the latest medical research to ensure you're
              getting the best results possible
            </p>
          </div>
          <div className="feature__card">
            <i className="fas fa-circle-check fa-4x"></i>
            <h2>Try Now</h2>
            <p>
              Try our product bundles today and take the first step towards a
              healthier, younger you!
            </p>
          </div>
        </div>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured, try reloading...</p>
      ) : (
        <>
          <div className="homescreen__products">
            {data?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default HomeScreen;
