import styled from 'styled-components';

export const CornerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    background: #ff79c6;
    color: #282a36;
    display: block;
    font-size: 1rem;
    line-height: 1rem;
    margin: 0;
    padding: 14px 110px;
    position: fixed;
    top: 20px;
    right: -90px;
    text-align: center;
    text-decoration: none;

    transition: all 0.2s linear;
    transform: rotate(45deg);
  }

  & a:hover {
    background: #8be9fd;
  }

  @media(max-width: 1158px) {
    display: none;
  }
`;
