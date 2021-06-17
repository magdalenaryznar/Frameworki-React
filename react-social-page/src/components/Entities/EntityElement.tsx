import { FC } from 'react';
import styled from 'styled-components';

import { BlockContainer, Title } from '../../styledHelpers/Components';


const EntityBox = styled.div`
    display: flex;
    box-shadow: 0 4.5px 10px rgba(0, 0, 0, 0.15),
    0 36px 80px rgba(0, 0, 0, 0.07);
    margin: 3px;
    img {
        width: 120px;
        height: 120px;
        padding: 3px;
    }

    .content {
        width: 300px;
        padding: 10px;
        word-wrap: break-word;
        h1 {
    overflow: hidden;
        }
    }
`;

const Address = styled.div`
    h3 {
        margin-top:10px;
    }
`;

interface IEntity {
    url: string;
    title: string;
}

const EntityElement: FC<IEntity> = (props) => {
    return (
        <EntityBox >
            <img src={props?.url} alt="" />
            <BlockContainer className='content'>
                <Title>{props?.title}</Title>
                <Address>
                    <h3>City address</h3>
                    <h3>Country</h3>
                </Address>
            </BlockContainer>
        </EntityBox>
    )
}

export default EntityElement;