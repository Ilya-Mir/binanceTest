import React from 'react'
import { RadioGroup, Radio } from 'react-radio-group'
import { Container, RadioLabel } from './search.style'

const MODE = ['change', 'volume']

export type HeaderProps = {
  setSubMode: (arg0: any) => any
  subMode: string
}

const SearchBar: React.FC<HeaderProps> = ({ setSubMode, subMode }) => {
  const changeMode = (value: string) => {
    setSubMode(value)
  }

  return (
    <Container>
      <input type="search" placeholder="Search..." />
      <RadioGroup selectedValue={subMode} onChange={changeMode}>
        <RadioLabel>
          <Radio value={MODE[0]} />
          Change
        </RadioLabel>
        <RadioLabel>
          <Radio value={MODE[1]} />
          Volume
        </RadioLabel>
      </RadioGroup>
    </Container>
  )
}

export default SearchBar
