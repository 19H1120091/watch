import React, { useState, useCallback, useEffect } from "react";
import Helmet from "../components/Helmet";
import axios from "axios";
import productData_Male from "../assets/fake-data/products-male";
import category from "../assets/fake-data/category_male";
import CheckBox from "../components/CheckBox";
import colors from "../assets/fake-data/product-color";
import type from "../assets/fake-data/product-type";
// import Button from "../components/Button";
import InfinityList from "../components/InfinityList";

const Male = () => {
  const initFilter = {
    category: [],
    color: [],
    type: [],
  };

  const getInitialState = () => {
    const value = "0";
    return value;
  };


  
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get("/api/products/male");
      setProductData(data);
    };
    fetchproducts();
  }, []);

  const productList = productData;
  

  const [products, setProducts] = useState(productList)



  const [filter, setFilter] = useState(initFilter);
  const [value, setValue] = useState(getInitialState);
  const handleChange = (e) => {
    setValue(e.target.value);
    const temp = productList
    if (!e.target.value) {
      return temp;
     }
 
     if (e.target.value == 1) {
       temp = temp.sort(function (a, b) {
         return a.price - b.price;
       });
     
       
     }
     if (e.target.value == 2) {
       temp = temp.sort(function (a, b) {
         return b.price - a.price;
       });
      }
    setProducts(temp);
  };


  const updateProducts = useCallback(() => {
    let temp = productList;

    if (filter.category.length > 0) {
      temp = temp.filter((e) => filter.category.includes(e.categorySlug));
    }

    if (filter.color.length > 0) {
      temp = temp.filter((e) => {
        const check = e.colors.find((color) => filter.color.includes(color));
        return check !== undefined;
      });
    }

    if (filter.type.length > 0) {
      temp = temp.filter((e) => {
        const check = e.type.find((type) => filter.type.includes(type));
        return check !== undefined;
      });
    }

    setProducts(temp);
  }, [filter, productList]);

  const filterSelect = (spe, checked, item) => {
    if (checked) {
      switch (spe) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.categorySlug],
          });
          break;
        case "COLOR":
          setFilter({
            ...filter,
            color: [...filter.color, item.color],
          });
          break;
        case "TYPE":
          setFilter({
            ...filter,
            type: [...filter.type, item.type],
          });
          break;
        default:
      }
    } else {
      switch (spe) {
        case "CATEGORY":
          const newCategory = filter.category.filter(
            (e) => e !== item.categorySlug
          );
          setFilter({ ...filter, category: newCategory });
          break;

        case "COLOR":
          const newColor = filter.color.filter((e) => e !== item.color);
          setFilter({ ...filter, color: newColor });
          break;
        case "TYPE":
          const newType = filter.type.filter((e) => e !== item.type);
          setFilter({ ...filter, type: newType });
          break;
        default:
      }
    }
  };

  const clearFilter = (filter) => {
    setFilter(initFilter);
  };
  useEffect(() => {
    updateProducts();
  }, [updateProducts]);

  return (
    <Helmet title="Đồng hồ nam">
    <div className="container">
    <div className="catalog_range">
    <select  className="form-select" aria-label="Default select example" value={value} onChange={handleChange}>
                    <option value="DEFAULT" disabled>Sắp xếp theo</option>
                    <option value="1">Giá tăng dần</option>
                    <option value="2">Giá giảm dần</option>
                  </select>
        </div>
    <div className="catalog">
        <div className="catalog__filter">
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">Thương hiệu</div>
            <div className="catalog__filter__widget__content">
              {category.map((item, index) => (
                <div
                  key={index}
                  className="catalog__filter__widget__content__item"
                >
                  <CheckBox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("CATEGORY", input.checked, item)
                    }
                    checked={filter.category.includes(item.categorySlug)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">Màu sắc</div>
            <div className="catalog__filter__widget__content">
              {colors.map((item, index) => (
                <div
                  key={index}
                  className="catalog__filter__widget__content__item"
                >
                  <CheckBox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("COLOR", input.checked, item)
                    }
                    checked={filter.color.includes(item.color)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">Phân loại</div>
            <div className="catalog__filter__widget__content">
              {type.map((item, index) => (
                <div
                  key={index}
                  className="catalog__filter__widget__content__item"
                >
                  <CheckBox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("TYPE", input.checked, item)
                    }
                    checked={filter.type.includes(item.type)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__content">
              <div className="catalog__filter__widget__content__button">
                <button className="button" onClick={clearFilter}>
                  Xóa bộ lọc
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="catalog__content">
          <InfinityList data={products} />
        </div>
      </div></div>
      
    </Helmet>
  );
};

export default Male;
