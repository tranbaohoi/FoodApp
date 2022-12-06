import React, { useState } from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import heroImg from "../assets/images/hero.png";
import '../styles/hero-section.css'
import { Link } from "react-router-dom";
import Category from "../components/UI/category/Category";
import '../styles/home.css'

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import whyImg from '../assets/images/location.png'

import products from '../assets/fake-data/products'

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";
import ProductCard from "../components/UI/product-card/ProductCard";

import networkImg from '../assets/images/network.png'

import { useEffect } from "react";
import TestimonialSlider from "../components/UI/slider/TestimonialSlider";

const featureData = [
    {
        title: "Quick Delivery",
        imgUrl: featureImg01,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    },

    {
        title: "Super Dine In",
        imgUrl: featureImg02,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    },
    {
        title: "Easy Pick Up",
        imgUrl: featureImg03,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    },
];

const Home = () => {

    const [category, setCategory] = useState('All')
    const [allproducts, setAllProducts] = useState(products)
    const [hotPizza, setHotPizza] = useState([])

    useEffect(() => {
        const filterHotPizza = products.filter((item) => item.category === 'Pizza')

        setHotPizza(filterHotPizza)
    }, [])
    useEffect(() => {
        if (category === 'All') {
            setAllProducts(products)
        } else if (category !== 'All') {
            const filteredProducts = products.filter(item => item.category.toLowerCase() === category.toLowerCase())

            setAllProducts(filteredProducts)
        }
    }, [category])

    return (
        <Helmet title="Home">
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className="hero__content  ">
                                <h5 className="mb-3">Easy way to make an order</h5>
                                <h1 className="mb-4 hero__title">
                                    <span>HUNGRY?</span> Just wait <br /> food at
                                    <span> your door</span>
                                </h1>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                                    magni delectus tenetur autem, sint veritatis!
                                </p>

                                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                                    <button className="order__btn d-flex align-items-center justify-content-between">
                                        Order now <i class="ri-arrow-right-s-line"></i>
                                    </button>

                                    <button className="all__foods-btn">
                                        <Link to="/foods">See all foods</Link>
                                    </button>
                                </div>

                                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                                    <p className=" d-flex align-items-center gap-2 ">
                                        <span className="shipping__icon">
                                            <i class="ri-car-line"></i>
                                        </span>{" "}
                                        No shipping charge
                                    </p>

                                    <p className=" d-flex align-items-center gap-2 ">
                                        <span className="shipping__icon">
                                            <i class="ri-shield-check-line"></i>
                                        </span>{" "}
                                        100% secure checkout
                                    </p>
                                </div>
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
                        <Col lg='12' className="text-center">
                            <h5 className="feature__subtitle mb-4">What we server</h5>
                            <h2 className="feature__title">Just sit back at home</h2>
                            <h2 className="feature__title">
                                we will <span>take care</span>
                            </h2>
                            <p className="mb-1 mt-4">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, aspernatur?
                            </p>
                            <p className="feature__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, dolores!
                            </p>
                        </Col>
                        {
                            featureData.map((item, index) => {
                                return <Col lg='4' md='4' sm='6' key={index} className='mt-5'>
                                    <div className="feature__item text-center px-5 py-3">
                                        <img src={item.imgUrl} alt={item.title} className='w-25 mb-3' />
                                        <h5 className="fw-bold">{item.title}</h5>
                                        <p>{item.desc}</p>
                                    </div>
                                </Col>
                            })
                        }
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className="text-center">
                            <h2>Popular Foods</h2>
                        </Col>

                        <Col lg='12'>
                            <div className="food__category d-flex align-items-center justify-content-center gap-4">
                                <button onClick={() => setCategory('All')} className={`all__btn ${category === 'All' ? 'foodBtnActive' : ''}`}>All</button>
                                <button onClick={() => setCategory('Burger')} className={`d-flex align-items-center justify-content-center gap-2 ${category === 'Burger' ? 'foodBtnActive' : ''}`}><img src={foodCategoryImg01} alt="" />Burger</button>
                                <button onClick={() => setCategory('Pizza')} className={`d-flex align-items-center justify-content-center gap-2 ${category === 'Pizza' ? 'foodBtnActive' : ''}`}><img src={foodCategoryImg02} alt="" />Pizza</button>
                                <button onClick={() => setCategory('Bread')} className={`d-flex align-items-center justify-content-center gap-2 ${category === 'Bread' ? 'foodBtnActive' : ''}`}><img src={foodCategoryImg03} alt="" />Bread</button>
                            </div>
                        </Col>
                        {
                            allproducts.map((item, index) => {
                                return <Col lg='3' md='4' sm='6' key={index} className='mt-5'>
                                    <ProductCard item={item} />
                                </Col>
                            })
                        }

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
                                <p className="tasty__treat-desc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Dolorum, minus. Tempora reprehenderit a corporis velit,
                                    laboriosam vitae ullam, repellat illo sequi odio esse iste
                                    fugiat dolor, optio incidunt eligendi deleniti!
                                </p>

                                <ListGroup className="mt-4">
                                    <ListGroupItem className="border-0 ps-0">
                                        <p className=" choose__us-title d-flex align-items-center gap-2 ">
                                            <i class="ri-checkbox-circle-line"></i> Fresh and tasty
                                            foods
                                        </p>
                                        <p className="choose__us-desc">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                            Quia, voluptatibus.
                                        </p>
                                    </ListGroupItem>

                                    <ListGroupItem className="border-0 ps-0">
                                        <p className="choose__us-title d-flex align-items-center gap-2 ">
                                            <i class="ri-checkbox-circle-line"></i> Quality support
                                        </p>
                                        <p className="choose__us-desc">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Qui, earum.
                                        </p>
                                    </ListGroupItem>

                                    <ListGroupItem className="border-0 ps-0">
                                        <p className="choose__us-title d-flex align-items-center gap-2 ">
                                            <i class="ri-checkbox-circle-line"></i>Order from any
                                            location{" "}
                                        </p>
                                        <p className="choose__us-desc">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Qui, earum.
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
                        <Col lg='12' className="text-center mb-3">
                            <h2>Hot Pizza</h2>
                        </Col>
                        {
                            hotPizza.slice(0, 4).map((item, index) => {
                                return <Col lg='3' md='4' key={index} className='mt-5'>
                                    <ProductCard item={item} />
                                </Col>
                            })
                        }
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="testimonial">
                                <h5 className="testimonial__subtitle mb-4">
                                    Testimonial
                                </h5>
                                <h2 className="testimonial__title mb-4">What our <span>customers</span> are saying</h2>
                                <p className="testimonial__desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe numquam qui culpa obcaecati possimus dicta ducimus temporibus tenetur modi maiores?</p>
                                <TestimonialSlider />
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <img className="w-100" src={networkImg} alt="network" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Home;
