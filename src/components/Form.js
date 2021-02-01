import React from 'react'
import styled from '@emotion/styled'


const Button = styled.input`
  margin-top: 20px;
  font-weight: 700;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: all linear 0.25s;

  &:hover{
    background-color: #326AC0;
  }
`

const Form = () => {
  return (
    <form>
      <Button
        type="submit"
        value="Calculate"
      />
    </form>
  )
}

export default Form
