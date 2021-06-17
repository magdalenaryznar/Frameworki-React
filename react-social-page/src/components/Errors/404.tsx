import { FC } from 'react';
import styled from 'styled-components'
import { Title } from '../../styledHelpers/Components';


const Wrapper=styled.div`
width: 100%;
`;

const Imagine = styled.img``;

export const Error404: FC=()=>{
    return (
        <Wrapper>
            <Title>Page not found!</Title>
            <Imagine src="./404.jpg" />
            
        </Wrapper>
    )
}