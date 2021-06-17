import React, { FC } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { Wrapper, Title, BlockContainer, } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';
import Icon from '../Common/Icon';
const SliderContainer = styled(Wrapper)`
    width: 100%;
    display: block;
    margin-right: 30px;
`;

const CustomSlider = styled(Slider)`
display: flex;
align-items: center;
overflow: hidden;
width: 100%;
    .slick-list {
        width: 100%;
        margin: 30px;
    }

    .slick-track {
        
        display: flex;
        > div {
            border-radius: 7px; 
            width: 300px !important;
            padding: 5px;
        }
    }

`;


const StyledLink = styled(Link)`
text-decoration:none
`;

const BigImage = styled.img`
    border-radius: 7px;
    width: 100%;
    max-height: 220px;
    position: relative;
`;
const Content = styled.div`
    position: absolute;
    z-index: 1000;
    height: 130px;
    width: 300px;
    top: 100px;
    background: ${Colors.white};
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    border-bottom: 2px solid ${Colors.lightgray};
    h5 {
        color: ${Colors.mediumgray};
        padding: 15px;
    }
`;

const StyledTitle = styled.h2`
    font-size: 18px;
    color: ${Colors.darkgrey};
    font-weight: bolder;
    margin-left: 115px;
    margin-top: 10px;
    padding-right: 5px;
`;

const StyledBigIcon = styled.img`
    width: 60px;
    height: 60px;
    margin: auto;
    filter: contrast(0.1);
    padding-top: 10px;
`;

const StyledSmallIcon = styled.img`
    width: 15px;
    height: 20px;
    padding: 0 10px;
    filter: contrast(0.1);
`;

const IconContainer = styled.div`
    position: absolute;
    background: ${Colors.white};
    padding: 10px;
    border-top: 1px solid ${Colors.lightgray};
    border-right: 1px solid ${Colors.lightgray};
    border-left: 1px solid ${Colors.lightgray};
    border-bottom: 2px solid ${Colors.lightgray};
    border-radius: 7px;
    width: 80px;
    height: 80px;
    top: -50px;
    left: 5px;
`;

const InfoFeild = styled.div`
    display: flex;
    margin-top: 35px;
    margin-left: 5px;
    h3 {
        align-self: center;
        color: ${Colors.darkgrey};
        padding: 0 10px;
    }
`;

const Dot = styled.img`
    width: 4px;
    height: 4px;
    margin: 5px 10px;
`;
export const WorkspacesSlider: FC = () => {
    const workspaces = [
        {
            title: "Client Contract",
            bgImage: "./media/images/contract.jpg",
            iconUrl: "./media/icons/file-signature-solid.svg",
            category: "Contract",
            users: 150,
            url: "/client-contract"
        },
        {
            title: "Supplier Contract",
            bgImage: "./media/images/contract.jpg",
            iconUrl: "./media/icons/file-signature-solid.svg",
            category: "Contract",
            users: 25,
            url: "/supplier-contract"
        },
        {
            title: "Corporate",
            bgImage: "./media/images/biuro.jpg",
            iconUrl: "./media/icons/entities.png",
            category: "Corporate",
            users: 25,
            url: "/corporate"
        },
        {
            title: "Group Norms",
            bgImage: "./media/images/norms.jpg",
            iconUrl: "./media/icons/entities.png",
            category: "Norms",
            users: 25,
            url: "/group-norms"
        },
        {
            title: "Real Estate Contract",
            bgImage: "./media/images/real-estate.jpg",
            iconUrl: "./media/icons/entities.png",
            category: "Contract",
            users: 50,
            url: "/real-estate-contract"
        },
        {
            title: "Specialist Contract",
            bgImage: "./media/images/contract.jpg",
            iconUrl: "./media/icons/file-signature-solid.svg",
            category: "Contract",
            users: 120,
            url: "/specialistt-contract"
        },
        {
            title: "Patient Contract",
            bgImage: "./media/images/contract.jpg",
            iconUrl: "./media/icons/file-signature-solid.svg",
            category: "Contract",
            users: 85,
            url: "/patient-contract"
        },
        {
            title: "Appointment",
            bgImage: "./media/images/biuro.jpg",
            iconUrl: "./media/icons/entities.png",
            category: "Appointment",
            users: 25,
            url: "/appointment"
        },
        {
            title: "Classes",
            bgImage: "./media/images/norms.jpg",
            iconUrl: "./media/icons/entities.png",
            category: "College",
            users: 25,
            url: "/classes"
        },
        {
            title: "Business Contract",
            bgImage: "./media/images/real-estate.jpg",
            iconUrl: "./media/icons/entities.png",
            category: "Contract",
            users: 50,
            url: "/business-contract"
        },
    ]

    const settings = {
    dots: true,
    initialSlide: -1,
    speed: 200,
    slidesToShow: 3,
    }

    const workspaceElement =  workspaces.map((workspace, index) =>
    <BlockContainer>
            <BigImage src={workspace.bgImage} alt=""></BigImage>
        <StyledLink to={workspace.url}>
            <Content>
                <StyledTitle>{workspace.title}</StyledTitle>
                <IconContainer>
                    <StyledBigIcon src={workspace.iconUrl} alt=""/>
                </IconContainer>
                <InfoFeild>
                    <StyledSmallIcon src={workspace.iconUrl} />
                    <h3>{workspace.category}</h3>
                    <Dot src="./media/icons/black-circle.png" alt=""/>
                    <h3>Users {workspace.users}</h3>
                </InfoFeild>
                <h5>Last update 2 days ago</h5>
            </Content>
        </StyledLink>
    </BlockContainer>)

    return (
        <SliderContainer>
            <Title>Workspaces</Title>
            <CustomSlider {...settings}>
                {workspaceElement}
            </CustomSlider>
        </SliderContainer>
    )
}