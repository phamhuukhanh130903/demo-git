import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";
import ProductCard from "../components/UI/product-card/ProductCard";

import "../styles/all-foods.css";
import "../styles/pagination.css";
import ReactPaginate from "react-paginate";
import axios from "axios";


const AllFoods = () => {
  const [searchItem, setSearchItem] = useState("");
  const [productData, setProductData] = useState([]);

  const [pageNumber, setPageNumber] = useState(0);
  const searchedProduct = productData.filter((item) => {
    if (searchItem.value === "") return item;
    if (item.name.toLowerCase().includes(searchItem.toLowerCase()))
      return item;
  })
  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage);

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  useEffect(() => {
    function fetchData() {
      axios.get('http://localhost:8000/')
          .then((res) => {
            setProductData(res.data)
          }).catch((error) => console.log(error)
      )
    } fetchData()
  }, []);

  return (
    <Helmet title="All Foods">
      <CommonSection title="All Foods" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs='12'>
              <div className="search__widget d-flex align-items-center justify-content-between">
                <input
                  type="text"
                  placeholder="I'm looking for..."
                  value={searchItem}
                  onChange={(e) => setSearchItem(e.target.value)}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs='12' className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option value="">Default</option>
                  <option value="ascending">A - Z</option>
                  <option value="descending">Z - A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCard item={item} />
              </Col>
            ))}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel="Prev"
                nextLabel="Next"
                containerClassName="paginationBtns"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
