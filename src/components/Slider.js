import styled from "styled-components"
import {ArrowLeftOutlined, ArrowRightOutlined} from "@mui/icons-material";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`
const Arrow = styled.div`
  height: 50px;
  width: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(0vw);
`
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${props => props.bg};
`

const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`

const Image = styled.img`

  height: 80%;
`

const InfoContainer = styled.div`
  flex: 1;
`
const Title = styled.h1`
  font-size: 70px;
`
const Description = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`
const Slider = () => {

    const handleClick = (direction)=>{

    };


    return (
        <Container>
            <Arrow direction={"left"} onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>

            <Wrapper>
                <Slide bg={"f5fafd"}>
                    <ImageContainer>
                        <Image src={"https://i.ibb.co/XsdmR2c/1.png"}/>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Description>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</Description>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg={"fcf1ed"}>
                    <ImageContainer>
                        <Image src={"https://i.ibb.co/XsdmR2c/1.png"}/>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>WINTER SALE</Title>
                        <Description>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</Description>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg={"fbf0f4"}>
                    <ImageContainer>
                        <Image src={"https://i.ibb.co/XsdmR2c/1.png"}/>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>POPULAR SALE</Title>
                        <Description>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</Description>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>

            <Arrow direction={"right"} onClick={()=>handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider