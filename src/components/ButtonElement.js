import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
border-radius:50px;
background: ${({ primary }) => (primary ? '#da5902' : 'black')};
white-space:nowrap;
padding:${({big}) => (big ? '14px 48px' : '12px 30px' )};
color:${({dark}) => (dark ? 'white' : 'black' )};
font-size:${({fontBig}) => (fontBig ? '20px' : '12px' )};
outline:none;
font-weight:bold;
border:none;
cursor:pointer;
display:flex;
justify-content:center;
align-items:center;
transition: all 0.2s ease-in-out;

&:hover{
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? 'white' : '#da5902')};
    color:${({dark}) => (dark ? 'black' : 'white' )};
}

`