import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";


const Container = styled.div``;
const Title = styled.h1``;
const FilterContainer = styled.div``;
const Filter = styled.div``;

const ProductList = () => {
    return(
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter></Filter>
            </FilterContainer>
        </Container>
    )
}

export default ProductList;