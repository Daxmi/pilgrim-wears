import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  // display: flex;
  // padding: 20px;
  // justify-content: space-between;
  // ${mobile({ padding: "0px", flexDirection:"column" })}
  background: #d0f0c0;
`;
const Wrapper = styled.div`
display: flex;
padding: 40px 0;
justify-content: space-between;
${mobile({ padding: "0px", flexDirection:"column" })}
width: 100%;
max-width: 1024px;
margin: 0 auto;
`

const Categories = () => {
  return (
    <Container>
      <Wrapper>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Categories;
