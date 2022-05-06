import { useState, useEffect } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import { Check } from "@material-ui/icons";
import cards from "../images/image.png";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile, tab } from "../responsive";
import { useSelector, } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { createOrder } from "../redux/apiCalls";

const Container = styled.div`
 
`;

const Wrapper = styled.div`
  margin 0 auto;
  padding: 20px;
  width: 100%;
  max-width: 1024px;
  box-sizing: border-box;
  ${mobile({ padding: "10px" })}
`;
const Main = styled.div`
  background-color: #f5f5f5 
`
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Bottom = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  ${tab({ flexDirection: "column" })};
`;

const Info = styled.div`
  flex: 3;
`;

const InfoTitle = styled.div`
`

const InfoContainer = styled.div`
  border-radius: 5px;
  box-sizing: border-box;
  background-color: white;
  box-shadow: -1px 3px 10px -6px rgba(0,0,0,0.75);
  margin: 10px 0;
`
const InfoHeader = styled.div`
  display: flex;
  padding: 8px;
  alignItems: center;
  border-bottom: 1px solid #f0f0f0; 
`

const Image = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 10px;
`;

const Summary = styled.div`
  flex: 1;
  max-width: 300px;
  ${tab({ marginTop: "20px" })};
`

const SummaryBottom = styled.div`
  border-radius: 5px;
  box-sizing: border-box; 
  background-color: white;
  box-shadow: -1px 3px 10px -6px rgba(0,0,0,0.75);
  margin: 10px 0;
    a {
      text-decoration: none;
    }

`
const SummaryProduct = styled.div`
  padding: 10px;
  height: 80px; 
  border-bottom: 1px solid #f0f0f0;
`
const ProductContent = styled.div`
  display: flex;
  height: 100%;
`
const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const SummaryItem = styled.div`
  padding: 0 8px 8px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`
    font-size: 14px;
`;

const SummaryItemPrice = styled.span`
    font-size: 17px;
`;

const SummaryPriceSpan = styled.span`
  color: ${props => props.color};
  margin-right: 5px;
`
const SummaryTotalContainer = styled.div`
  margin: 10px 0 0;
  border-bottom: 1px solid #f0f0f0;
`


const SummaryTotalPrice = styled.div`
  border-top: 1px solid #f0f0f0;
  padding-top: 8px;
`
const Button = styled.button`
  // width: 100%;
  display: block;
  margin: 0 auto;
  cursor: pointer;
  border: none;
  padding: 10px;
  background-color: transparent;
  color: #f68b1e;
  font-weight: 600;
`;


const Scroll = styled.div`
  scroll-behaviour: smooth;
  max-height: 230px;
  overflow-y: auto; 

    ::-webkit-scrollbar {
      width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px #888; 
      border-radius: 10px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888; 
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #5e5d5c; 
    }
`

const Label = styled.label`
  display: block;
  max-width: 100%;
  color: gray;
  margin-bottom: 6px!important;
  font-family: Roboto,Helvetica,Arial,sans-serif;
  font-size: 12px
`

const Input = styled.input`
  font-family: Roboto,Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.42857;
  background: #fff;
  color: #000;
  border: 1px solid #ccc;
  padding: 7px 10px;
  width: 100%!important;
  height: auto!important;
  box-sizing: border-box;

  ::placeholder {
    opacity: 0.5;
  }
`

const NumberSpan = styled.span`
  display: flex;
  align-items: center; 
  padding: 0 10px;
  font-size: 14px;
  line-height: 1.42857;
  background: #fff;
  color: #000;
  border: 1px solid #ccc;
`

const TextArea = styled.textarea`
  font-family: Roboto,Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.42857;
  background: #fff;
  color: #000;
  border: 1px solid #ccc;
  padding: 7px 10px;
  width: 100%;
  min-height: 100px;
  margin-bottom: -5px;
  resize: none;
  box-sizing: border-box;
`
const Select = styled.select`
  font-family: Roboto,Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.42857;
  background: #fff;
  color: #000;
  border: 1px solid #ccc;
  padding: 7px 10px;
  width: 100%!important;
  height: auto!important;
`
const Option = styled.option`
  font-weight: normal;
  display: block;
  white-space: nowrap;
  min-height: 1.2em;
  padding: 0px 2px 1px;
  font-family: Roboto,Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.42857;
`

const CheckContainer = styled.div`
  border-radius: 50%;
  margin-right: 15px;
  color: white;
  width: 22px;
  height: 22px;
  display: flex; 
  align-items: center;
  justify-content: center;
  background: ${props => props.filled && props.first ? "#f68b1e" : "#f0f0f0"}
`

const InfoHeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
 
`

const InfoHeaderText = styled.p`
  font-size: ${props => props.size}px;
  color: ${props => props.color}
`
const EditButton = styled.button`
  fontSize: 14px;
  color: #f68b1e;
  cursor: pointer;
  background: transparent;
  border: none;
`
const InfoBody = styled.div`
  padding: 8px;
`
const BodyTitle = styled.div`
  margin: 10px 37px;
`

const BodyText = styled.p`
  font-size: 14px;
  padding: 2px 0;
  font-weight: ${props => props.header && "700"}px;
  color: ${props => props.header ? "black" : "gray"};
  letter-spacing: 0.1px;
`

const Form = styled.form`
  margin: 10px 37px;
  display: flex;
  gap: 20px;
  flex-direction: column;
`
const NameContainer = styled.div`
  display: flex;
  gap: 20px;
  flex: 1;
`

const InputContainer = styled.div`
  flex: 1;
  
`
const ProceedButton = styled.button`
  width: 100%;
  height: 50px;
  color: white; 
  fontSize: 16px;
  background-color: #f68b1e;
  border: none;
  cursor: pointer;
`

const PaymentText = styled.p`
  font-size: 14px; 
  padding: 2px 0;
  font-weight: 700;
  color: black;
  letter-spacing: 0.1px;
`

const PaymentChoiceContainer = styled.div`
  border-bottom: 1px solid #f0f0f0;
  padding: 10px 0;
`

const AlignContainer = styled.div`
  display: flex;
  align-items: center;

`
const RadioInput = styled.input`
  margin-right: 10px; 
  width: 20px;
  height: 20px;
`

const CardImageContainer = styled.div`
  width: 180px;
  height: 40px; 
  margin: 10px 30px 0;
`
const CardImage = styled.img`
  width: 100%;
  height: 100%;
`

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const user = useSelector(state => state.user);
  const { products } = cart;
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const [details, setDetails] = useState("");
  const [firstName, setFirstName] = useState(`${user.currentUser.username}`);
  const [lastName, setLastName] = useState("");
  const [tel, setTel] = useState("");
  const [address, setAdd] = useState("");
  const [region, setRegion] = useState("");
  const [filled, setFilled] = useState(false);
  const [payMethod, setPayMethod] = useState("card");

  useEffect(() => {
    // console.log(user);
  }, [details, payMethod,])


  const handleClick = (e) => {
    e.preventDefault();
    setDetails({
      ...details,
      firstName,
      lastName,
      tel,
      address,
      region
    });
    setFilled(true);
  };

  // const payStack = async (e) => {
  //   e.preventDefault();
  //   const res = await axios.post(`http://localhost:5000/payment`);
  //   window.location.href = `${res.data.data.authorization_url}`;
  // };

  const cashPayment = async (e) => {
    e.preventDefault();
    // const orderDetail = {
    //   ...details, userId: user.currentUser._id, products: products, amount: cart.total
    // }
    // const res = await axios.post("http://localhost:5000/orders", orderDetail);
    navigate("/success");

    // createOrder({...details, userId: user.currentUser._id, products: products, amount: cart.total, });
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Main>
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Bottom>
            <Info>
              <InfoTitle>CHECKOUT</InfoTitle>
              <InfoContainer>
                <InfoHeader>
                  <CheckContainer first={true} filled={filled}>
                    <Check style={{ width: "20px", height: "20px" }} />
                  </CheckContainer>
                  <InfoHeaderTitle>
                    <InfoHeaderText>
                      1. ADDRESS DETAILS
                    </InfoHeaderText>
                    {
                      filled && <EditButton onClick={() => setFilled(false)}> Edit details</EditButton>
                    }
                  </InfoHeaderTitle>
                </InfoHeader>
                <InfoBody>
                  {/* On Successful filling */}
                  {
                    filled ?
                      <BodyTitle>
                        <BodyText header={true}>{firstName} {lastName}</BodyText>
                        <BodyText>{address}, {region}</BodyText>
                        <BodyText>+234{tel}</BodyText>
                      </BodyTitle>
                      :
                      <Form onSubmit={handleClick}>
                        <NameContainer>
                          <InputContainer>
                            <Label>First Name *</Label>
                            <Input type="text" value={firstName} placeholder="Femi" name="fname" onChange={(e) => { setFirstName(e.target.value) }} required />
                          </InputContainer>
                          <InputContainer>
                            <Label>Last Name *</Label>
                            <Input type="text" value={lastName} placeholder="Chukwuma" name="lname" onChange={(e) => { setLastName(e.target.value) }} required />
                          </InputContainer>
                        </NameContainer>
                        <InputContainer>
                          <Label>Mobile Phone Number *</Label>
                          <NameContainer>
                            <NumberSpan>+234</NumberSpan>
                            <Input type="text" value={tel} placeholder="8004522601" name="tel" onChange={(e) => { setTel(e.target.value) }} required />
                          </NameContainer>
                        </InputContainer>
                        <InputContainer>
                          <Label>Address *</Label>
                          <TextArea type="text" value={address} placeholder="Street Name / Building / Apartment No. / Floor" name="add" onChange={(e) => { setAdd(e.target.value) }} required />
                        </InputContainer>
                        <InputContainer>
                          <Label>State/Region *</Label>
                          <Select name="state" onChange={(e) => { setRegion(e.target.value) }} required >
                            <Option value="adamawa">Adamawa</Option>
                            <Option value="adamawa">Akwa Ibom</Option>
                            <Option>Yola</Option>
                            <Option>Adamawa</Option>
                            <Option>Akwa Ibom</Option>
                            <Option>Yola</Option>
                          </Select>
                        </InputContainer>
                        <ProceedButton type="submit" >
                          Confirm Order
                        </ProceedButton>
                      </Form>
                  }
                </InfoBody>
              </InfoContainer>
              <InfoContainer>
                <InfoHeader>
                  <CheckContainer>
                    <Check style={{ width: "20px", height: "20px" }} />
                  </CheckContainer>
                  <InfoHeaderText >
                    2. PAYMENT METHOD
                  </InfoHeaderText>
                </InfoHeader>
                {
                  filled &&
                    <Form style={{ padding: "8px" }} onSubmit={cashPayment}>
                      <PaymentText>
                        How do you want to pay for your order?
                      </PaymentText >
                      <PaymentChoiceContainer>
                        <AlignContainer>
                          <RadioInput type="radio" checked={true} onChange={(e) => setPayMethod(e.target.value)} name="radAnswer" value="card" id="" />
                          <PaymentText>
                            Cards
                          </PaymentText>
                        </AlignContainer>
                        <CardImageContainer>
                          <CardImage src={cards} alt="react" />
                        </CardImageContainer>
                      </PaymentChoiceContainer>
                      <AlignContainer>
                        <RadioInput type="radio" onChange={(e) => setPayMethod(e.target.value)} name="radAnswer" value="cash" id="" />
                        <PaymentText>
                          Cash On Delivery
                        </PaymentText>
                      </AlignContainer>
                      <ProceedButton type="submit">
                        Paystack
                      </ProceedButton>
                    </Form>
                }
              </InfoContainer>
            </Info>
            <Summary>
              <InfoTitle>CHECKOUT</InfoTitle>
              <SummaryBottom>
                <InfoHeader>
                  <InfoHeaderText>
                    YOUR ORDER (4 items)
                  </InfoHeaderText>
                </InfoHeader>
                <Scroll>
                  {
                    products.map(product => (
                      <SummaryProduct key={product._id}>
                        <ProductContent>
                          <Image src={product.img} />
                          <PriceContainer>
                            <InfoHeaderText size="13">
                              {product.title}
                            </InfoHeaderText>
                            <InfoHeaderText size="13" color="#f68b1e">
                              <SummaryPriceSpan>N </SummaryPriceSpan>
                              {product.price * product.quantity}
                            </InfoHeaderText>
                            <InfoHeaderText size="13">
                              <SummaryPriceSpan color="gray">Qty:</SummaryPriceSpan>
                              {product.quantity}
                            </InfoHeaderText>
                          </PriceContainer>
                        </ProductContent>
                      </SummaryProduct>
                    ))
                  }
                </Scroll>
                <SummaryTotalContainer>
                  <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemText>$ {cart.total}</SummaryItemText>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemText>$ 5.90</SummaryItemText>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemText>$ -5.90</SummaryItemText>
                  </SummaryItem>
                  <SummaryTotalPrice>
                    <SummaryItem type="total">
                      <SummaryItemText><SummaryPriceSpan >Total</SummaryPriceSpan></SummaryItemText>
                      <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                  </SummaryTotalPrice>
                </SummaryTotalContainer>
                <Link to="/cart">
                  <Button>MODIFY CART</Button>
                </Link>
              </SummaryBottom>
            </Summary>
          </Bottom>
        </Wrapper>
      </Main>
      <Footer />
    </Container>
  );
};

export default Cart;
