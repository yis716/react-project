import styled, { keyframes } from "styled-components";

const changeAnimation = keyframes`   // keyframes 선언한다
    0% {opacity:1}
    50% {opacity:.5; transform:scale(.9)}
    100% {opacity:1}
`;

export const Wrapper = styled.div`
    width: 100%;
`;

export const Head = styled.div`
    width: 90%;
    height: 350px;
    margin: 170px 5% auto;
    border-bottom: 1px solid #555;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const P = styled.p`
    font-size: 3rem;
    font-weight: 700;
    transform: translateY(100px);
`;

// export const NavLink = styled.NavLink`
//     font-size: 1.1rem;
//     font-weight: 500;
// `;