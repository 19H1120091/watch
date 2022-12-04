import React from "react";
import PropTypes from "prop-types";
import Carousel from 'react-bootstrap/Carousel';
import banner from "../assets/images/banner.png";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";

const HeroSlider = (props) => {


  return (
    <div className="heroslider">
    <div className="container-fluid"> <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <div className="slider-btn">
         
          <button className="btn btn-1">Our Service</button>
        
        </div>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="slider-btn">
         
          <button className="btn btn-1">Our Service</button>
        
        </div>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <div className="slider-btn">
         
          <button className="btn btn-1">Our Service</button>
          
        </div>
        </Carousel.Caption> */}
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Third slide"
        />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <div className="slider-btn">
         
          <button className="btn btn-1">Our Service</button>
          
        </div>
        </Carousel.Caption> */}
        
      </Carousel.Item>

    </Carousel></div>
     
    <div className="py-5 service-24">
    <div className="container">
    
        <div className="row wrap-service-24">
        
            <div className="col-lg-3 col-md-6">
                <div className="card rounded card-shadow border-0 mb-4">
                    <a href="/" className="card-hover py-4 text-center d-block rounded"> 
												<span className="bg-success-grediant">F</span>
                        <h6 className="ser-title">Miễn phí Ship</h6>
                    </a>
                </div>
            </div>
            {/* <!-- Column -->
            <!-- Column --> */}
            <div className="col-lg-3 col-md-6">
                <div className="card card-shadow border-0 mb-4">
                    <a href="/" className="card-hover py-4 text-center d-block rounded"> 
												<span className="bg-success-grediant">C</span>
                        <h6 className="ser-title">Thanh toán COD</h6>
                    </a>
                </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
                <div className="card card-shadow border-0 mb-4">
                    <a href="/" className="card-hover py-4 text-center d-block rounded"> 
												<span className="bg-success-grediant">V</span>
                        <h6 className="ser-title">Ưu đãi khách hàng VIP</h6>
                    </a>
                </div>
            </div>
            {/* <!-- Column -->
            <!-- Column --> */}
            <div className="col-lg-3 col-md-6">
                <div className="card card-shadow border-0 mb-4">
                    <a href="/" className="card-hover py-4 text-center d-block rounded"> 
												<span className="bg-success-grediant">G</span>
                        <h6 className="ser-title">Hỗ trợ bảo hành</h6>
                    </a>
                </div>
            </div>
            
     
          
       
						
        </div>
    </div>
</div>
    </div>
    
  );
};

HeroSlider.propTypes = {
  data: PropTypes.array.isRequired,
  control: PropTypes.bool,
  auto: PropTypes.bool,
  timeOut: PropTypes.number,
};
// 

export default HeroSlider;
