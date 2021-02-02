import React from 'react'
import styled from '@emotion/styled'

const DivResult = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`

const Info = styled.p`
  font-size: 18px;

  span {
    font-weight:900
  }
`

const Price = styled.p`
  font-size: 30px;

  span {
    font-weight:900
  }
`


const Quote = ({result}) => {
  if (Object.keys(result).length === 0) return null
  // console.log(result)
  return (
    <DivResult>
      <Price>The price is:<span> {result.PRICE}</span></Price>
      <Info>Higher price of day:<span> {result.HIGHDAY}</span></Info>
      <Info>Lower price of day:<span> {result.LOWDAY}</span></Info>
      <Info>Changes on last 24 hours:<span> {result.CHANGEPCT24HOUR}</span></Info>
      <Info>Last update:<span> {result.LASTUPDATE}</span></Info>
    </DivResult>
  )
}

export default Quote
