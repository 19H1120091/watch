import React from "react";
import pic1 from "../assets/images/pic1.jpg";
import pic2 from "../assets/images/pic2.jpg";
import pic3 from "../assets/images/pic3.jpg";
import pic4 from "../assets/images/pic4.png";

const Picture = () => {
  return (
    <div className="picture">
      <div className="picture-1">
        <div className="picture-1__title">
          B A U M E & M E R C I E R<span>Bộ sưu tập Riviera 2022</span>
        </div>
        <div className="picture-1__center">
          <button className="btn">
            <svg
              width="180px"
              height="60px"
              viewBox="0 0 180 60"
              className="border"
            >
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
            </svg>
            Mua ngay
          </button>
        </div>
        <img src={pic1} alt="" />
      </div>
      <div className="picture-2">
       

        <img src={pic2} alt="" />

        <img src={pic3} alt="" />
      </div>
      <div className="picture-3">
        <img src={pic4} alt="" />
      </div>
    </div>
  );
};

export default Picture;
