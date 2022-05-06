import { Badge } from "@material-ui/core";
import {  ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector, } from "react-redux"

// import { logoutS } from "../redux/apiCalls";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
  background: #d0f0c0;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // ${mobile({ padding: "10px 0px" })}
  box-sizing: border-box;
  height: 100%;
  margin: 0 auto;

`;



const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;



const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const CenterList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  gap 15px;
  align-items: center;
  justify-content: center;
`
const CenterListItem = styled.li`
  list-style: none;
  padding: 0;
  font-size: 16px;
  color: #004225;
`
const Logo = styled.h1`
  font-weight: bold;
  font-size: 18px;
  color: #004225;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = ({user}) => {
  const quantity = useSelector(state => state.cart.quantity);
  // const user = useSelector(state => state.user.currentUser);
  // const dispatch = useDispatch();

  // const logout = () => {
  //   logoutS(dispatch);
  // }

  return (
    <Container>
      <Wrapper>
        <Left>
        <Link to="/" style={{textDecoration: "none"}}><Logo>PILGRIM WEARS.</Logo></Link>
        </Left>
        <Center>
          <CenterList>
            <CenterListItem>Shop</CenterListItem>
            <CenterListItem>About Us</CenterListItem>
            <CenterListItem>Contact Us</CenterListItem>
          </CenterList>
        </Center>
        <Right>
          {
            user ?
              <>
                {/* <button onClick={logout}>SignOut</button> */}
                <>Hi, {user.displayName}</>
              </>
              :
              <>
                <Link to="/register">
                  <MenuItem>REGISTER</MenuItem>
                </Link>
                <Link to="/login">
                  <MenuItem>SIGN IN</MenuItem>
                </Link>
              </>
          }
          <Link to="/cart" style={{textDecoration: "none"}}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined style={{color: "#004225"}}/>
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
