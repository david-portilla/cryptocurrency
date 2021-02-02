import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import image from './cryptomonedas.png'
import Form from './components/Form'
import axios from 'axios'
import Quote from './components/Quote'
import Spinner from './components/Spinner'

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`

function App () {
  const [currency, setCurrency] = useState('')
  const [criptoCurrency, setCriptoCurrency] = useState('')
  const [result, setResult] = useState({})
  const [loading, showLoading] = useState(false)

  useEffect(() => {
    // avoid run on first time
    if (currency === '') return

    // fecth API to get a quote
    const getQuote = async () => {
      const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${ criptoCurrency }&tsyms=${ currency }`
      const result = await axios.get(URL)
      // Show spinner
      showLoading(true)

      setTimeout(() => {
        showLoading(false)

        // Save Quote result
        setResult(result.data.DISPLAY[criptoCurrency][currency])
      }, 2000);

    }
    getQuote()

    console.log('Quoting...')
  }, [currency, criptoCurrency])

  // Show Spinner or Result
  const component = (loading) ? <Spinner /> : <Quote result={result}></Quote>

  return (
    <Wrapper>
      <div>
        <Image
          src={image}
          alt="Crypto image"
        />
      </div>
      <div>
        <Heading>Quote cryptocurrencies</Heading>
        <Form
          setCurrency={setCurrency}
          setCriptoCurrency={setCriptoCurrency}
        />
        {component}
      </div>
    </Wrapper>
  );
}

export default App;
