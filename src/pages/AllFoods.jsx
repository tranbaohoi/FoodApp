import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import products from "../assets/fake-data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import ProductCard from "../components/UI/product-card/ProductCard";
import "../styles/all-food.css";
import "../styles/pagination.css";
import ReactPaginate from "react-paginate";
const AllFoods = () => {
  const [productData, setProductData] = useState(products);
  const [pageNumber, setPageNumber] = useState(0);
  const [filterProducts, setFilterProducts] = useState("ascending");
  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = productData.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(productData.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const searchProducts = products.filter((item) =>
      item.title.toLowerCase().includes(searchTerm)
    );
    setPageNumber(0);
    setProductData(searchProducts);
  };

  //   const handleFilter = (e) => {
  //     const filterValue = e.target.value;
  //     const sortProducts = [];
  //     if (filterValue === "ascending") {
  //       sortProducts = products.sort((a, b) => a.title.localeCompare(b.title));
  //     } else if (filterValue === "descending") {
  //       sortProducts = products.sort((a, b) => b.title.localeCompare(a.title));
  //     }
  //     setProductData(sortProducts);
  //   };

  useEffect(() => {
    if (filterProducts === "ascending") {
      const ascProducts = products.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      setProductData(ascProducts);
    } else if (filterProducts === "descending") {
      const descProducts = products.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setProductData(descProducts);
    } else if (filterProducts === "high-price") {
      const highProducts = products.sort((a, b) => a.price - b.price);
      setProductData(highProducts);
    } else if (filterProducts === "low-price") {
      const lowProducts = products.sort((a, b) => b.price - a.price);
      setProductData(lowProducts);
    }
  }, [filterProducts]);

  return (
    <Helmet title="All-Foods">
      <CommonSection title="All Foods" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="search__widget d-flex align-items-center justify-content-between w-50">
                <input
                  type="text"
                  placeholder="I'm looking for..."
                  onChange={handleSearch}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" className="mb-5">
              <div className="sorting__widget text-end">
                <select
                  className="w-50"
                  onChange={(e) => setFilterProducts(e.target.value)}
                >
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {displayPage.map((item, index) => (
              <Col md="4" lg="3" sm="6" xs="6" className="mb-4">
                <ProductCard item={item} key={index} />
              </Col>
            ))}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel="Prev"
                nextLabel="Next"
                containerClassName="paginationBttns"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
