import "./HomeScreen.css";

import { useGetAllProductsQuery } from "../redux/productsApi";
import { faHandHoldingMedical } from "@fortawesome/free-solid-svg-icons";
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../components/Spinner";

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
            <h2 className="feature__title">Reverse Ageing</h2>
            <p>
              Leveraging only the most powerful anti-ageing compounds, our
              stacks are designed to reverse your biological clock
            </p>
          </div>
          <div className="feature__card">
            <i className="fas fa-user-doctor fa-4x"></i>
            <h2 className="feature__title">Expertly Curated</h2>
            <p>
              Carefully curated by world-renowned health and longevity experts
              and independently tested for maximum efficacy
            </p>
          </div>
          <div className="feature__card">
            <i className="fas fa-brain fa-4x"></i>
            <h2 className="feature__title">AI Informed</h2>
            <p>
              With cutting-edge AI, our formulas are continually stress-tested
              against the latest medical research to ensure you get only the
              best
            </p>
          </div>
        </div>
      </div>
      {isLoading ? (
        <Spinner />
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
