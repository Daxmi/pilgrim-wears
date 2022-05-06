import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
`;

const Wrapper = styled.div`
  // display: flex;
  ${mobile({ flexDirection: "column" })}
  margin 0 auto;
  padding: 20px;
  width: 100%;
  max-width: 1024px;
  box-sizing: border-box;
  ${mobile({ padding: "10px" })}
`;

const Left = styled.div`
  // flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;



const SocialContainer = styled.div`
  display: flex;
  margin: 30px 0;
  justify-content: center;
  gap: 30px;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  
`;


const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  // flex: 1;
  // width: 100%;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  border-bottom: 1px solid #d0c0f0;
`;

const ListItem = styled.li`
  // width: 50%;
  // margin-bottom: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <div style={{display: "flex", width: "100%",}}>
        <Left>
          <Logo>PILGRIM WEARS</Logo>
        </Left>
          <div style={{flex: "1"}}>
            <List>
              <ListItem>FAQs</ListItem>
              <ListItem>Our Location</ListItem>
              <ListItem>About Us</ListItem>
              <ListItem>Contact Us</ListItem>
            </List>
          </div>
        </div>
        <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
       
      </Wrapper>
    </Container>
  );
};

export default Footer;
