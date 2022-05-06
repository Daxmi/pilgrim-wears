import { useEffect, useState } from "react";
import styled from "styled-components";
// import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
// padding: 20px;
// display: flex;
// flex-wrap: wrap;
// justify-content: space-between;
`;

const Wrapper = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
width: 100%;
max-width: 1024px;
margin: 0 auto;
box-sizing: border-box;
`


const Products = ({cat, filters}) => {
  // const [filter, setFilter] = useState("All");
  const [products, setProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get( cat ? `http://localhost:5000/products?category=${cat}` : "http://localhost:5000/products");
        setProducts(res.data);
      }catch(err) {

      }
    }
    getProducts();
  }, [cat, filters]);


  // useEffect(() => {
  //   console.log(popularProducts)
  //   setFilteredProducts(popularProducts.filter((item) =>(
  //     item.id === 1
  //   )));
  //     console.log(filteredProducts)
  // },  [cat, filters])

  return (
    <Container>
      <Wrapper>
        {products.map((item) => (
          <Product item={item} key={item._id} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Products;
