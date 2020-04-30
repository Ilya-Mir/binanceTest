import styled from 'styled-components'

export const Container = styled.div`
  background-color: rgb(255, 255, 255);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(230, 230, 230);
  border-image: initial;
  box-sizing: border-box;
  position: relative;
  margin: 0 0 0 2px;
  outline: 0;
  display: flex;
`

export const MainButton = styled.button`
  cursor: pointer;
  font-size: 12px;
  margin: 0 2px;
  padding: 0 4px;
  box-sizing: border-box;
  border: 0;
  position: relative;

  &:focus {
    outline: 0;
  }

  &:after {
    display: block;
    content: '';
    position: absolute;
    height: 100%;
    width: 1px;
    background-color: rgb(230, 230, 230);
    top: 0;
    right: 0;
  }
`

export const DropdownButton = styled.button`
  border: 0;
  font-size: 18px;
  display: inline-flex;
  cursor: pointer;
  padding: 0 4px;
  align-items: center;

  &:focus {
    outline: 0;
  }
`

export const DropdownItem = styled.button`
  background-color: rgb(255, 255, 255);
  color: rgb(51, 51, 51);
  cursor: pointer;
  text-align: left;
  width: auto;
  border-width: 0;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  padding: 0.5em;

  &:focus {
    outline: 0;
  }

  &:hover {
    color: rgb(240, 185, 11);
    border-color: rgb(243, 186, 47);
  }
`
export const DropdownContainer = styled.div<{ isOpened: boolean }>`
  position: absolute;
  display: ${({ isOpened }) => (isOpened ? 'flex' : 'none')};
  top: 20px;
  width: auto;
  flex-flow: column nowrap;
  overflow: hidden;
  left: 0;
`
