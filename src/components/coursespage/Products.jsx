import React from "react";
import "./Products.css";

const Products = (props) => {
  return (
    <>
      <div className="product-main">
        <div className="pro-img">
          <img src={props.src} alt="" />
        </div>
        <div className="pro-intro">
          <div className="pro-name">
            <h4>Learn Python: The Complete Python Programming Course</h4>
          </div>
          <div className="pro-data">
            <div className="views">
              <img src="./images/eye.png" alt="" />
              <p className="space">1245 views</p>
            </div>
            <div className="lectures">
              <img src="./images/play.png" alt="" />
              <p className="space">12 Lectures</p>
            </div>
            <div className="durations">
              <img src="./images/time.png" alt="" />
              <p className="space">6hr 40min</p>
            </div>
          </div>
          <div className="pro-line"></div>
          <div className="pro-description">
            <div className="pro-rate">
              <p className="rating">4.5 </p>
              <p className="rating-total">(134)</p>
            </div>
            <div className="pro-price">
              <p className="discounted">Rs2600</p>
              <p className="original">Rs3600</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
