import React from 'react'
import styled from 'styled-components'

import { Link } from '../../theme'
import Web3Status from '../Web3Status'
import { darken } from 'polished'

const HeaderElement = styled.div`
  margin: 1.25rem;
  display: flex;
  min-width: 0;
`

const Aligner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: 320px;
  margin-left: 0 auto;
  border-bottom: 1px solid #ccc;
  // background: #EEE;
`

const HeadLine = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.litgreen};
  color: #40d572;
  font-weight: 600;
`

const Title = styled.div`
  display: flex;
  align-items: center;

  #image {
    font-size: 1.5rem;
    margin-right: 1rem;
  }

  #link {
    text-decoration-color: ${({ theme }) => theme.wisteriaPurple};
  }

  #title {
    display: inline;
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.wisteriaPurple};
    :hover {
      color: ${({ theme }) => darken(0.2, theme.wisteriaPurple)};
    }
  }
`

export default function Header() {
  return (
    <>
    <Aligner>
    <HeadLine>
      Buy & Sell LITION Token 
    </HeadLine>
      <HeaderElement>
        <Title>
         {/* <h1 id="prefix">powered by </h1> */}
          <span id="image" role="img" aria-label="Unicorn Emoji">
            🦄
          </span>

          <Link id="link" href="https://uniswap.io">
            <h1 id="title">Uniswap</h1>
          </Link>
        </Title>
      </HeaderElement>

      <HeaderElement>
        <Web3Status />
      </HeaderElement>
      </Aligner>
    </>
  )
}
