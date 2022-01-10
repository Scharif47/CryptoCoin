import React from 'react'
import styled from 'styled-components';

const Element = styled.p`
  cursor: pointer;
  padding: 0.2rem 1rem;
  border-radius: 1rem;

  :hover{
    background-color: whitesmoke;
    filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))
  }
`;

function SectionBar() {
  return (
    <div className='flex space-x-5 sm:space-x-10 justify-center mb-2'>
      <Element>Cryptocurrency</Element>
      <Element>Categories</Element>
      <Element>DeFi</Element>
      <Element>NFT</Element>
    </div>
  )
}

export default SectionBar
