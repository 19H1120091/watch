import React from "react";

import card1 from "../assets/images/card1.jpg";
import card2 from "../assets/images/card2.jpg";
import card3 from "../assets/images/card3.jpg";


const CardImage = (props) => {
  return (
    <>
      <section className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card1 text-white card-has-bg click-col" >
            <img src={card1} alt="" />
          

            </div>

            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card1 text-white card-has-bg click-col" >
            <img src={card2} alt="" />
          

            </div>

            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card1 text-white card-has-bg click-col" >
            <img src={card3} alt="" />
          

            </div>

            </div>
          </div>
        </div>

      </section>
    </>
  );
};



export default CardImage;
