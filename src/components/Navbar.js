import React from "react";
import styled from "styled-components";
import {Search, ShoppingCartOutlined} from "@mui/icons-material";
import {Badge} from "@mui/material";

const Container = styled.div`
  height: 60px;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

`
const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`
const Center = styled.div`
  flex: 2;
  text-align: center;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`
const SearchContainer = styled.div`
  display: flex;
  border: 0.5px solid lightgray;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Logo = styled.h1`
  font-weight: bold;
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

const Input = styled.input`
  border: none;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder={"Search"}/>
                        <Search style={{color : "gray", fontSize: 16}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo>I am Dev</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color={"primary"}>
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}


export default Navbar;