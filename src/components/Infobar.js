import React from 'react'
import styled from 'styled-components';

const Element = styled.p`
  cursor: pointer;
  padding: 0.2rem 1rem;
  border-radius: 1rem;

  :hover{
    background-color: whitesmoke;
  }
`;

function Infobar() {
  return (
    <div className='flex space-x-5 sm:space-x-10 justify-center mb-1'>
      <Element>Cryptocurrency</Element>
      <Element>Categories</Element>
      <Element>DeFi</Element>
      <Element>NFT</Element>
    </div>
  )
}

export default Infobar
