import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import heroSliderData from "../assets/fake-data/hero-slider";
import Section, {
  SectionTitle,
  SectionBody,
  SectionCarousel,
  SectionReview,
} from "../components/Section";
// import policy from "../assets/fake-data/policy";
// import PolicyCard from "../components/PolicyCard";
import Grid from "../components/Grid";
// import productData from "../assets/fake-data/products";
import ProductCard from "../components/ProductCard";
// import banner from "../assets/images/banner.png";
import CarouselCard from "../components/Carousel";
import ShopSection from "./ShopSection";
// import CartItem from "../components/CartItem";

// import { useSelector } from "react-redux";
// import numberWithCommas from "../utils/numberWithCommas";
import CardImage from "../components/CardImage";
import Picture from "../components/Picture";
import Customer from "../components/Customer";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchproducts();
  }, []);
  const productList = products;

  const getProducts = (count) => {
    const max = productList.length - count;
    const min = 0;
    const start = Math.floor(Math.random() * (max - min) + min);
    return productList.slice(start, start + count);
  };

  return (
    <Helmet title="Trang Chủ">
      {/*Begin Slider */}
      <HeroSlider data={heroSliderData} />
      <Picture />

      {/* End Slider */}
      {/* Policy Section */}
      {/* <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              <Link key={index} to="/policy">
                <PolicyCard
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section> */}
      {/* End Policy Section */}
      {/* Best Sellings Section */}
      <Section>
        <SectionTitle>Bán chạy</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={5} smCol={1} gap={20}>
            {getProducts(4).map((item, index) => (
              <ProductCard
                key={index}
                id={item._id}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
                rate={item.rating}
                review={item.numReviews}
              ></ProductCard>
            ))}
          </Grid>
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle>Nổi bật</SectionTitle>
        <SectionBody>
          <Grid col={6} mdCol={5} smCol={1} gap={20}>
            {getProducts(6).map((item, index) => (
              <ProductCard
                key={index}
                id={item._id}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
                rate={item.rating}
                review={item.numReviews}
              ></ProductCard>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* End Best Sellings Section */}
      {/* <Section>
        <SectionBody>
          <Link to="/catalog">
            <img src={banner} alt="banner" />
          </Link>
        </SectionBody>
      </Section> */}
      <CardImage />

      {/* Add Section*/}
      <Section>
        <SectionTitle> mới</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {getProducts(8).map((item, index) => (
              <ProductCard
                key={index}
                id={item._id}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
                rate={item.rating}
                review={item.numReviews}
              ></ProductCard>
            ))}
          </Grid>
        </SectionBody>
      </Section>

      <Section>
        <SectionCarousel>Mặt số </SectionCarousel>

        <Customer />
      </Section>

      {/* <Section>
        <SectionReview> Nói về chúng tôi </SectionReview>

        <CarouselCard />
        
      </Section> */}

      {/* End Add Section*/}

      {/* Banner*/}

      {/* End Banner*/}
      {/* Popular*/}

      {/* Popular*/}
    </Helmet>
  );
};

export default Home;
