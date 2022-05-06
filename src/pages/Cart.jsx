import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Add, Remove, ShoppingCartOutlined } from "@material-ui/icons";

import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile, tab } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { decrementQuantity, deleteProduct, incrementQuantity } from "../redux/cartRedux";



const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;


const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;


const Bottom = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  ${tab({ flexDirection: "column" })};
`;

const Empty = styled.div`
    display: flex;
    flex-direction: column;
    height: 50vh;
    align-items:  center;
    justify-content: center;
`
const EmptyCart = styled.div`
    height: 100px;
    width: 100px;
    background-color: #f8f8ff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const EmptyCartText = styled.p`
    font-size: 16px;
    margin: 20px;
    
`

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  padding: 2px 0;
  // background-color: green;
  // justify-content: space-between;
  // ${mobile({ flexDirection: "column" })}
  border-bottom: 1px solid #eee;
`;
const OtherDetail = styled.div`
    display: flex;
    flex: 1;
    // justify-content: space-between;
    ${tab({ flexDirection: "column" })}
`
const SomeOtherDetail = styled.div`
    display: flex;
    flex:2;
    // background-color: red;
`
const ProductDetail = styled.div`
  flex:1;
  display: flex;
  // background-color: red;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 10px;
`;

const Details = styled.div`
  // padding: 20px;
  // background-color: blue;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductProperty = styled.div`
${tab({ display: "flex", marginTop: "10px" })}
`

const ProductColor = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span`
font-size:  12px;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  // justify-content: center;
  // background-color: red;
`;

const ProductAmount = styled.div`
  font-size: 16px;
  margin: 0 5px;
  ${mobile({ margin: "5px 15px" })}
`;
const DeleteContainer = styled.div`
    display: flex;
    flex:1;
    align-items: center;
    justify-content: center;
`
const ProductPrice = styled.div`
  font-size: 16px;
  font-weight: 900;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  max-width: 300px;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  ${tab({ marginTop: "20px" })}
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const DeleteButton = styled.div`
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 1px solid black;
    background-color: transparent;
    cursor: pointer;
    margin: 0 20px;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const { products } = cart;
  console.log()
  const dispatch = useDispatch();

  useEffect(() => {

  }, [cart])

  const deleteHandle = (id) => {
    dispatch(deleteProduct(id));
  }

  const increment = (product) => {
    dispatch(incrementQuantity(product))
  }
  const decrement = (product) => {
    dispatch(decrementQuantity(product))
  }
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        {
          products.length === 0 ?
            <Empty>
              <EmptyCart>
                <ShoppingCartOutlined style={{ fontSize: "60" }} />
              </EmptyCart>
              <EmptyCartText >
                Your cart is empty!
              </EmptyCartText>
              <TopButton type="filled"><Link to="/">START SHOPPING</Link></TopButton>
            </Empty> :
            <Bottom>
              <Info>
                {products.map(product => (
                  <Product key={product._id}>
                    <Image src={product.img} />
                    <OtherDetail>
                      <ProductDetail>
                        <Details>
                          <ProductName>
                            <b><Link to={`/product/${product._id}`}>{product.title}</Link></b>
                          </ProductName>
                          <ProductProperty>
                            <ProductColor color={product.color} />
                            <ProductSize>
                              <b>Size:</b> {product.size}
                            </ProductSize>
                          </ProductProperty>
                        </Details>
                      </ProductDetail>
                      <SomeOtherDetail>
                        <PriceDetail>
                          ₦{product.price}
                        </PriceDetail>
                        <PriceDetail>
                          <ProductAmountContainer>
                            <Add onClick={() => increment(product)} style={{ fontSize: "16", cursor: "pointer" }} />
                            <ProductAmount>{product.quantity}</ProductAmount>
                            <Remove onClick={() => decrement(product)} style={{ fontSize: "16", cursor: "pointer" }} />
                          </ProductAmountContainer>
                        </PriceDetail>
                        <DeleteContainer>
                          <ProductPrice>
                            $ {product.price * product.quantity}
                          </ProductPrice>
                          <DeleteButton onClick={() => deleteHandle(product)}>X</DeleteButton>
                        </DeleteContainer>
                      </SomeOtherDetail>
                    </OtherDetail>
                    <Hr />
                  </Product>
                ))}
              </Info>
              <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>
                  <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Estimated Shipping</SummaryItemText>
                  <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Shipping Discount</SummaryItemText>
                  <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                  <SummaryItemText>Total</SummaryItemText>
                  <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                </SummaryItem>
                <Link to="/checkout">
                  <Button>CHECKOUT NOW</Button>
                </Link>
              </Summary>
            </Bottom>
        }
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
