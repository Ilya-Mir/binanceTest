import React, { useState, useRef } from 'react'
import useOnClickOutside from 'use-onclickoutside'
import {
  Container,
  DropdownButton,
  DropdownContainer,
  DropdownItem,
  MainButton,
} from './dropdown.style'

interface Option {
  value: string
  label: string
}

type DropdownProps = {
  options: Option[]
  value?: string
  onDropdownClick: (arg0: any) => void
}

const Dropdown: React.FC<DropdownProps> = ({ options, value, onDropdownClick }) => {
  const [isOpened, setOpened] = useState(false)

  const rootRef = useRef(null)
  useOnClickOutside(rootRef, () => setOpened(false))

  const currentActionOption = options.find(option => option.label === value)

  return (
    <Container ref={rootRef}>
      <MainButton
        onClick={() =>
          onDropdownClick(currentActionOption?.label ? currentActionOption.value : options[0].value)
        }
      >
        {currentActionOption?.label ? currentActionOption.label : options[0].label}
      </MainButton>
      <DropdownButton
        onClick={() => {
          setOpened(!isOpened)
        }}
      >
        ▾
      </DropdownButton>
      <DropdownContainer isOpened={isOpened}>
        {options.map(option => (
          <DropdownItem key={option.value} onClick={() => onDropdownClick(option.value)}>
            {option.label}
          </DropdownItem>
        ))}
      </DropdownContainer>
    </Container>
  )
}

export default Dropdown
