import Carousel from '../Components/Carousel'
import styled from 'styled-components';

const Wrapper = styled.div`
 background-color: #ffffff;
`;
const CarouselWrapper = styled.div`
    border: solid 1px black;
`;
const ListWrapper = styled.ul`
    display: flex;
`;

function Home(){
    return(
        <Wrapper>
        Home
        <CarouselWrapper>
            <h2>city 1</h2>
            <ListWrapper>
               <li> 
                <h3>room1</h3>
            <Carousel/>
                </li> 
                <li> 
                <h3>room2</h3>
            <Carousel/>
                </li> 
                <li> 
                <h3>room3</h3>
            <Carousel/>
                </li> 
                <li> 
                <h3>room4</h3>
            <Carousel/>
                </li> 
            </ListWrapper>
        </CarouselWrapper>
        
        <CarouselWrapper>
            <h2>city 2</h2>
            <ListWrapper>
               <li> 
                <h3>room1</h3>
            <Carousel/>
                </li> 
                <li> 
                <h3>room2</h3>
            <Carousel/>
                </li> 
                <li> 
                <h3>room3</h3>
            <Carousel/>
                </li> 
                <li> 
                <h3>room4</h3>
            <Carousel/>
                </li> 
            </ListWrapper>
        </CarouselWrapper>
        

        </Wrapper>
    )
}
export default Home;