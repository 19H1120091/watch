import React from "react";
import productData from "../assets/fake-data/products";
import productData_Male from "../assets/fake-data/products-male";
import productData_female from "../assets/fake-data/products-female";
import Helmet from "../components/Helmet";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import ProductView from "../components/ProductView";
const Product = (props) => {
  const product = productData.getProductBySlug(props.match.params.slug) || productData_Male.getProductBySlug(props.match.params.slug) || productData_female.getProductBySlug(props.match.params.slug)

  const relatedProducts = productData.getProducts(4) || productData_Male.getProducts || productData_female.getProducts 

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
 

  return (
    <Helmet title={props.match.params.id}>
      <Section>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle>khác</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {relatedProducts.map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
                rate= {item.rating}
                review={item.numReviews}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Product;
