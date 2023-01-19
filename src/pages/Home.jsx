import React from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";
import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";
import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products.js";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";
import { useEffect, useState } from "react";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

import { reviuu } from "../assets/fake-data/reviu.js";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, saepe?",
  },
  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, saepe?",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, saepe?",
  },
];

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       //console.log(data);
  //       setTimeout(() => {
  //         setIsLoading(false);
  //       }, 1000);
  //       // const filterRiviu = data.slice(0, 4);
  //       // console.log("AAAAAAAAAAAAAA" + filterRiviu);
  //       // let arrRiviu = [];
  //       // filterRiviu.forEach((item) => {
  //       //   let tem = {
  //       //     id: item.uuid,
  //       //     title: item.title,
  //       //     image01: item.comment_count,
  //       //     price: item.like_count,
  //       //   };
  //       //   arrRiviu.push(tem);
  //       // });
  //       // setReViu(arrRiviu);
  //     })
  //     .catch(() => {
  //       setIsError(true);
  //       setIsLoading(false);
  //     });
  // }, []);

  const [category, setCategory] = useState("ALL");
  const [allProducts, seeAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filterPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filterPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  const [reviu, setReViu] = useState([]);
  useEffect(() => {
    const filterRiviu = reviuu.slice(0, 4);
    let arrRiviu = [];
    filterRiviu.forEach((item) => {
      let tem = {
        id: item.uuid,
        title: item.title,
        image01: item.comment_count,
        price: item.like_count,
      };
      arrRiviu.push(tem);
    });
    setReViu(arrRiviu);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      seeAllProducts(products);
    }

    if (category === "BURGER") {
      const filterProducts = products.filter(
        (item) => item.category === "Burger"
      );
      seeAllProducts(filterProducts);
      console.log("Burger active");
    }

    if (category === "PIZZA") {
      const filterProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      seeAllProducts(filterProducts);
    }

    if (category === "BREAD") {
      const filterProducts = products.filter(
        (item) => item.category === "Bread"
      );
      seeAllProducts(filterProducts);
    }
  }, [category]);

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <h1>Error</h1>;
  }

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HURRY?</span> Just wait <br /> food at
                  <span> your door</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Earum consequuntur eligendi iure eaque!
                </p>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now <i class="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="all__foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>
              </div>
              <div className="hero__service d-flex align-items-center gap-5 mt-5">
                <p className="d-flex align-items-center gap-2">
                  <span className="shipping__icon">
                    <i class="ri-car-line"></i>
                  </span>
                  No shipping charge
                </p>
                <p className="d-flex align-items-center gap-2">
                  <span className="shipping__icon">
                    <i class="ri-shield-check-line"></i>
                  </span>
                  100% secure checkout
                </p>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                We will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Asperiores, quod!
              </p>
              <p className="feature-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, quia.
              </p>
            </Col>
            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    className="w-25 mb-3"
                    src={item.imgUrl}
                    alt="feature-img"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center gap-4 justify-content-center">
                <button
                  className={`all__btn ${
                    category === "ALL" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  onClick={() => setCategory("BURGER")}
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  }`}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>
                <button
                  onClick={() => setCategory("PIZZA")}
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  }`}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>
                <button
                  onClick={() => setCategory("BREAD")}
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  }`}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>
            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>
            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>Tasty Treat?</span>
                </h2>
                <p className="testy__treat-desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
                  laboriosam fugiat, cupiditate ducimus alias vero amet facilis
                  aspernatur laborum veniam nihil saepe natus odit explicabo
                  accusamus repellat. Maxime, molestias sed?
                </p>
                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i class="ri-checkbox-circle-line"></i>
                      Fresh and tasty foods
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Illo, dicta?
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i class="ri-checkbox-circle-line"></i>
                      Quality support
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Illo, dicta?
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i class="ri-checkbox-circle-line"></i>
                      Order from any location
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Illo, dicta?
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>Hot Pizza</h2>
            </Col>
            {hotPizza.map((item) => (
              <Col lg="3" md="4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__decs">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Recusandae porro nisi officia labore soluta repudiandae
                  quaerat cumque dolore quod dicta!
                </p>

                <TestimonialSlider />
              </div>
            </Col>
            <Col lg="6" md="6">
              <img src={networkImg} alt="network-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
